import { HStack, Image, List, ListItem, Text, Box } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import { getCroppedImageUrl } from "../services/image-url"
import Skeleton from "./Skeleton"

const GenreList = () => {
    const {genres, loading, error} = useGenre()

    const skeletons = [1,2,3,4,5]
    // if(loading) return <Spinner/>
    if(error) return null;

  return (
      <List>
     {loading && skeletons.map(skeleton=> (
     <Box paddingY={2}>
         <Skeleton height="auto" key={skeleton}/>
     </Box> 
     )) }
      {genres.map(genre=>
      <ListItem key={genre.id} paddingY='8px'>
        <HStack>
        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
        <Text fontSize='lg'>{genre.name}</Text> 
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenreList
