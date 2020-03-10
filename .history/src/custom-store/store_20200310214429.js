import { useState, useEffect } from "react"

let globalState = {}
let listeners = []
let actions = {}

export const useStore = () =>{
    const setState = useState(globalState)[1]

    const dispatch = (actionName,payload) =>{
        console.log(actions)
        const newState = actions[actionName](globalState,payload)
        console.log(listeners)
        for(let listener in listeners){
            console.log(listener)
            listener({
                ...globalState, ...newState
            })
        }
    }
    useEffect(()=>{
        listeners.push(setState)

        return ()=>{
            listeners = listeners.filter(lis => lis !== setState)
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