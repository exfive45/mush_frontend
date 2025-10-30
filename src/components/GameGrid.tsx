
import { SimpleGrid, Text } from "@chakra-ui/react"
import useGame from "../hooks/useGame"
import GameCard from "./GameCard"
import { GameCardSkeleton } from "./GameCardSkeleton"
import GameCardContainer from "./GameCardContainer"


 
const GameGrid = () => {

const {data, error, isLoading} = useGame()
const skeletons = [1, 2, 3, 4, 5, 6]
  return (
    <>
        {error && <Text> {error}</Text>}
        <SimpleGrid columns={{sm:2, md:3, lg:4, xl: 5}} padding='10px' spacing={5}   alignItems="stretch" >
            {isLoading && skeletons.map((skeleton)=><GameCardContainer>
                <GameCardSkeleton key={skeleton}/>
            </GameCardContainer>)}
            {data.map((game)=>(
                <GameCardContainer>
                    <div >
                    <GameCard  key={game.id} game={game}/>
                    </div>
                </GameCardContainer>
            ))}
            
        </SimpleGrid>

        </>
    
  )
}

export default GameGrid