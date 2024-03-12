import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  selectedGenre : Genre | null
  selectedPlatfrom : Platform | null
}

const GameGrid = ({selectedGenre , selectedPlatfrom } : Props) => {
  const { data, error, isLoading } = useGames(selectedGenre , selectedPlatfrom);
  let skeletons = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {/* passing sm , md ,lg means how the size should be depending on screen size */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeletons) => (
            <GameCardContainer key={skeletons} >
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard  game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
