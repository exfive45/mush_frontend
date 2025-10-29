
import { SimpleGrid, Text } from "@chakra-ui/react"
import useGame from "../hooks/useGame"
import GameCard from "./GameCard"
 
const GameGrid = () => {

const {games, error} = useGame()
  return (
    <div>
        {error && <Text> {error}</Text>}
        <SimpleGrid columns={{sm:2, md:4, lg:6, xl: 8}} padding='10px' spacing={5}>
            
            {games.map((game)=>(
                <GameCard  key={game.id} game={game}/>
            ))}
        </SimpleGrid>
    </div>
  )
}

export default GameGrid