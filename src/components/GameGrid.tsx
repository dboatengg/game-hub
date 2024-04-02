import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import Skeleton from "./Skeleton";
import { Genre } from "../hooks/useGenre";

interface Props {
  selectedGenre: Genre | null
}

const GameGrid = ({selectedGenre}:Props) => {
    const {data, error,loading} = useGames(selectedGenre)
    const skeletons = [1,2,3,4,5,6,7,8]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3}} padding='10px' spacing='10px'>
      {loading && skeletons.map(skeleton=>
      <GameCardContainer key={skeleton}>
        <Skeleton height='200px'/>
      </GameCardContainer>
      )}
      {data.map(game=> ( 
        <GameCardContainer key={game.id}>
          <GameCard  game={game}/>
        </GameCardContainer>
      ) )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid
