import {legacy_createStore as createStore} from 'redux'

const initialState = {
    counter : 0
}
const reducerFn = (state = initialState,action) =>{

    // Synchronous Function
    // we should not mutate the original state
    switch (action.type) {
        case  "INC" :

            return {...state,counter : state.counter + 1};

        case "DEC":
            return {...state,counter : state.counter - 1};
        case "RESET":
            return {counter : 0}

        case "ADD_BY_10":
        return {...state,counter: state.counter + 10}

        case "ADD_BY":
            return {...state,counter : state.counter+ action.payload}

        default:
        return state
    }

}




const store = createStore(reducerFn) ;

export default store