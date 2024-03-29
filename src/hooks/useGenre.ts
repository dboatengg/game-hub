import { useEffect, useState } from "react"
import apiClient from "../services/api-client"
import { CanceledError } from "axios";

interface Genre {
    id:number;
    name:string;
    image_background:string
}

interface FetchGenreResponse {
    count:number;
    results:Genre[]
}

const useGenre = () => {
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState('')
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true) 
        apiClient.get<FetchGenreResponse>('/genres',{signal:controller.signal})
        .then(response=>{
            setGenres(response.data.results);
            setLoading(false)
        })
        .catch(error=>{
            if (error instanceof CanceledError) return;
            setError(error.message)
            setLoading(false)
        })

        return ()=>controller.abort()
    }, [])

  return {genres, error, loading}
}

export default useGenre;