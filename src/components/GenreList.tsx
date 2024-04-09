import { HStack, Image, List, ListItem, Button, Box, Heading } from "@chakra-ui/react"
import useGenre, { Genre } from "../hooks/useGenre"
import { getCroppedImageUrl } from "../services/image-url"
import Skeleton from "./Skeleton"

interface Props {
  onSelectGenre:(genre:Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}:Props) => {
    const {data, loading, error} = useGenre()

    const skeletons = [1,2,3,4,5]
    // if(loading) return <Spinner/>
    if(error) return null;

  return (
    <>
    <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
     {loading && skeletons.map(skeleton=> (
     <Box paddingY={2} key={skeleton}>
         <Skeleton height="auto"/>
     </Box> 
     )) }
      {data.map(genre=>
      <ListItem key={genre.id} paddingY='8px'>
        <HStack>
        <Image objectFit='cover' boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
        <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold':'normal'} onClick={()=>onSelectGenre(genre)} variant="link" fontSize='lg'>{genre.name}</Button> 
        </HStack>
      </ListItem>)}
    </List>
    </>
  )
}

export default GenreList
