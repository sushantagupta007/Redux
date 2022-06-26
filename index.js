const redux = require('redux')
const createStores = redux.createStore

const BUY_CAKE = ' BUY_CAKE'

//Action Creator
const buyCake = () =>{
    //Action
    return {
        type:BUY_CAKE,
        info:'First redux action'
    }
}


//An object = state
const initialState = {
    numOfCakes:10
}


//Reducer Function

const reducer= (state=initialState, action) =>{
    if(action.type==BUY_CAKE){
        
        return {
            ...state, //Copy from object
            numOfCakes : state.numOfCakes-1
        }
    }
    else return state
}

const store = createStores(reducer)


let myState = store.getState()


console.log("Initial Value",myState.numOfCakes)

const unsubscribe = store.subscribe(()=>console.log('Updated State',store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
store.dispatch(buyCake())
