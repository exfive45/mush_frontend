import { useEffect, useState } from "react"


 import apiClient from "../services/apiClient"
import { CanceledError } from "axios"
interface Game{
    id: number,
    name: string
 }


 interface FetchGameGrid {
    id:number,
    results:Game[]
 }


 const useGame = () => {
const [games, setgames] = useState<Game[]>([])
const [error, seterror] = useState('')


useEffect(()=>{
    const controller = new AbortController()
    apiClient.get<FetchGameGrid>('/games', {signal: controller.signal})
    .then((res)=>setgames(res.data.results))
    .catch((err)=>{
        if(err instanceof CanceledError)return;
        seterror(err.message)})

    return ()=>controller.abort()
}, [])

return {games, error}

}

export default useGame