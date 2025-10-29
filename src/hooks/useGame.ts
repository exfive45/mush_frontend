import { useEffect, useState } from "react"


export interface Platform {
    id: string
    name: string
    slug: string
}


 import apiClient from "../services/apiClient"
import { CanceledError } from "axios"
 export interface Game{
    id: number,
    name: string
    background_image:string,
    parent_platforms:{platform:Platform}[]
    metacritic:number

 }


 interface FetchGameGrid {
    id:number,
    results:Game[]
 }


 const useGame = () => {
const [games, setgames] = useState<Game[]>([])
const [error, seterror] = useState('')
const [isLoading, setLoading
]  = useState(false)

useEffect(()=>{
    
    const controller = new AbortController()

    setLoading(true)

    apiClient.get<FetchGameGrid>('/games', {signal: controller.signal})
    .then((res)=>{setgames(res.data.results)
        setLoading(false)
     })
    .catch((err)=>{
        if(err instanceof CanceledError)return;
        seterror(err.message)
        setLoading(false)
    })

    return ()=>controller.abort()
}, [])

return {games, error, isLoading}

}

export default useGame