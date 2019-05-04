const initState = {
    total: 0
}

const rootReducer = (state = initState, action) => {
    const newTotal = state.total
    if(action.type === "ADD_COUNTER") {
        return {
            ...state,
            total: newTotal+1
        }
    }
    if(action.type === "SUBTRACT_COUNTER") {
        return {
            ...state,
            total: newTotal-1
        }
    }
    if(action.type === "RESET_COUNTER") {
        return {
            ...state,
            total: 0
        }
    }
    else {
        return state
    }
}

export default rootReducer