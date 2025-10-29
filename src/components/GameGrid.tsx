
import { SimpleGrid, Text } from "@chakra-ui/react"
import useGame from "../hooks/useGame"
import GameCard from "./GameCard"

 
const GameGrid = () => {

const {games, error} = useGame()
  return (
    <>
        {error && <Text> {error}</Text>}
        <SimpleGrid columns={{sm:2, md:3, lg:6, xl: 8}} padding='10px' spacing={5}>
            
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