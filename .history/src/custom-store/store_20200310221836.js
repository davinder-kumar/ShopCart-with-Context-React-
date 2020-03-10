import { useState, useEffect } from "react"

let globalState = {}
let listeners = []
let actions = {}

export const useStore = (shouldListen=true) =>{
    const setState = useState(globalState)[1]

    const dispatch = (actionName,payload) =>{
        const newState = actions[actionName](globalState,payload)
        globalState = {
            ...globalState ,...newState
        }
            
        for(let listener of listeners){
            listener(globalState)
        }
    }
    useEffect(()=>{
        if(shouldListen){
            listeners.push(setState)
        }

        return ()=>{
            if(shouldListen){
                listeners = listeners.filter(lis => lis !== setState)
            }
        }
    },[setState])
    return [globalState, dispatch]
}

export const initStore = (state, actionsP) =>{
    if(state){
        globalState = {
            ...globalState, ...state
        }
        actions = {
            ...actionsP
        }

    }
}