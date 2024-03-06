import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const {games , error , isLoading} = useGames()
  let skeletons = [1,2,3,4,5,6,7]

  return (
    <>
    {/* passing sm , md ,lg means how the size should be depending on screen size */}
    <SimpleGrid columns={{sm : 1 , md : 2 , lg : 3 , xl : 5}} spacing={10} padding='10px'>
      {isLoading && skeletons.map(skeletons => <GameCardSkeleton key={skeletons}/>)}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
        ))}
    </SimpleGrid>
    </>
  )
};

export default GameGrid;
