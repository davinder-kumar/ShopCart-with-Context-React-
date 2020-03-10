import { useState, useEffect } from "react"

let globalState = {}
let listeners = []
let actions = {}

const useStore = () =>{
    const setState = useState(globalState)

    const dispatch = actionName =>{
        const newState = actions[actionName](globalState)

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

const initStore = (state, actions) =>{
    if(state){
        globalState = {
            ...globalState, ...state
        }

    }
}