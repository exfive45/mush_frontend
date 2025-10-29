import { useEffect, useState } from "react"
 import apiClient from "../services/apiClient"
import { Text } from "@chakra-ui/react"

 interface Game{
    id: number,
    name: string
 }


 interface FetchGameGrid {
    id:number,
    results:Game[]
 }
const GameGrid = () => {

const [games, setgames] = useState<Game[]>([])
const [error, seterror] = useState('')


useEffect(()=>{
    apiClient.get<FetchGameGrid>('/games')
    .then((res)=>setgames(res.data.results))
    .catch((err)=>{seterror(err.message)})
})
  return (
    <div>
        {error && <Text> {error}</Text>}
        <ul>
            {games.map(game=><li key={game.id}>{game.name}</li>)}
        </ul>
    </div>
  )
}

export default GameGrid