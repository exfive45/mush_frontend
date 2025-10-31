import { useEffect, useState } from "react"
import apiClient from "../services/apiClient"
import { CanceledError, type AxiosRequestConfig } from "axios"



interface FetchResponse <T>{
    count:number
    results: T[]
}


const useData = <T>(endpoing:string, requesConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, seterror] = useState('')
    const [isLoading, setLoading
    ]  = useState(false)
    
    useEffect(()=>{
        
        const controller = new AbortController()
    
        setLoading(true)
    
        apiClient.get<FetchResponse<T>>(endpoing, {signal: controller.signal, ...requesConfig})
        .then((res)=>{setData(res.data.results)
            setLoading(false)
         })
        .catch((err)=>{
            if(err instanceof CanceledError)return;
            seterror(err.message)
            setLoading(false)
        })
    
        return ()=>controller.abort()
    }, deps ? [...deps] : [])
    
    return {data, error, isLoading}
  
}

export default useData