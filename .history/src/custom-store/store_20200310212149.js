import { useState, useEffect } from "react"

let globalState = {}
let listeners = []
let actions = {}

const useStore = () =>{
    const setState = useState(globalState)

    const dispatch = (actionName,payload) =>{
        const newState = actions[actionName](globalState,payload)

        for(let listener in listener){
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

export const initStore = (state, actions) =>{
    if(state){
        globalState = {
            ...globalState, ...state
        }
        actions = {
            ...actions
        }

    }
}