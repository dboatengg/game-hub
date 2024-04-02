import { HStack, Image, List, ListItem, Button, Box } from "@chakra-ui/react"
import useGenre, { Genre } from "../hooks/useGenre"
import { getCroppedImageUrl } from "../services/image-url"
import Skeleton from "./Skeleton"

interface Props {
  onSelectGenre:(genre:Genre) => void;
}

const GenreList = ({onSelectGenre}:Props) => {
    const {data, loading, error} = useGenre()

    const skeletons = [1,2,3,4,5]
    // if(loading) return <Spinner/>
    if(error) return null;

  return (
      <List>
     {loading && skeletons.map(skeleton=> (
     <Box paddingY={2} key={skeleton}>
         <Skeleton height="auto"/>
     </Box> 
     )) }
      {data.map(genre=>
      <ListItem key={genre.id} paddingY='8px'>
        <HStack>
        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
        <Button onClick={()=>onSelectGenre(genre)} variant="link" fontSize='lg'>{genre.name}</Button> 
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenreList
