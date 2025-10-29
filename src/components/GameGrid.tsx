
import { SimpleGrid, Text } from "@chakra-ui/react"
import useGame from "../hooks/useGame"
import GameCard from "./GameCard"
import { GameCardSkeleton } from "./GameCardSkeleton"

 
const GameGrid = () => {

const {games, error, isLoading} = useGame()
const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
        {error && <Text> {error}</Text>}
        <SimpleGrid columns={{sm:2, md:3, lg:4, xl: 5}} padding='10px' spacing={5}>
            {isLoading && skeletons.map((skeleton)=><GameCardSkeleton key={skeleton}/>)}
            {games.map((game)=>(
                <div key={game.id}>
                <GameCard   game={game}/>

                
                </div>
            ))}
            
        </SimpleGrid>

        </>
    
  )
}

export default GameGrid