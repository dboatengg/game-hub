import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import Skeleton from "./Skeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery:GameQuery
}

const GameGrid = ({gameQuery}:Props) => {
    const {data, error,loading} = useGames(gameQuery)
    const skeletons = [1,2,3,4,5,6,7,8]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:4}} padding='10px' spacing='20px'>
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
