
import { SimpleGrid, Text } from "@chakra-ui/react"
import useGame from "../hooks/useGame"
import GameCard from "./GameCard"
import { GameCardSkeleton } from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"
import type { Genre } from "../hooks/useGenres"

interface Props{
    selectedGenre:Genre | null 
}


 
const GameGrid = ({selectedGenre}:Props) => {

const {data, error, isLoading} = useGame(selectedGenre)
const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
        {error && <Text> {error}</Text>}
        <SimpleGrid columns={{sm:2, md:3, lg:4, xl: 5}} padding='3px' spacing={3}   >
            {isLoading && skeletons.map((skeleton)=><GameCardContainer key={skeleton}>
                <GameCardSkeleton />
            </GameCardContainer>)}
            {data.map((game)=>(
                <GameCardContainer key={game.id}>
                    <div >
                    <GameCard   game={game}/>
                    </div>
                </GameCardContainer>
            ))}
            
        </SimpleGrid>

        </>
    
  )
}

export default GameGrid