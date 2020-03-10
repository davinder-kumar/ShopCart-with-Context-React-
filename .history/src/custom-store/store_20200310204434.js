import { useState, useEffect } from "react"

let globalState = {}
let listeners = []
let actions = {}

const useStore = () =>{
    const setState = useState(globalState)

    useEffect(()=>{
        listeners.push(setState)

        return ()=>{
            listeners = listeners.filter(lis => lis !== setState)
        }
    })
    
}