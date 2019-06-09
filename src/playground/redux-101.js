import {createStore} from 'redux';

/** 
 * 
 * In order to create a store in redux you need to use the named export createStore
 * 
 * Add the store to a const variable
 * createStore requires one parameter, a function.
 * This function will take in state as a param. Set an object as the default
 * 
 * To get the current state you use the method getState. example store.getState()
 * 
 * In order to change the state you need an action. You can set actions using
 * the dispatch method. example store.dispatch({type:'INCREMENT'})
 * 
 * Add action as a parameter on the createStore instance and use an if or switch statement 
 * To manage state. 
 * 
 * 
 * Use a method call subscribe to do something when the state changes. It take a function 
 * as the parameter. For example if you want to console.log the state to the screen
 * everytime it changes you can use: 
 * 
 
store.subscribe(()=> {
    console.log(store.getState());
});

 *To make that happen
 * 
 * The return value from subscribe is actually a return value we can call to unsubscribe
 * And stop watching state. So you would name that to unsubscribe. For example:
 * 
 const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});
 * 
 * Calling unsubscribe() would then stop watching or subscribing to changes. 
 * 
*/


const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT', 
    incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT', 
    decrementBy
})

const resetCount = () => ({
    type:'RESET'
})

const setCount = ({setTo=1}={}) => ({
    type:'SET', 
    setTo
})


// const incrementCount1 = ({incrementBy = 1} = {}) => {
//    return store.dispatch(
//             {
//                 type:'INCREMENT', 
//                 incrementBy
//             }
//         );
// }


//REDUCERS
//1. Reducers are pure functions meaning the output of the function ONLY 
//   depends on the input of the function. Only change and use things in scope
//2. Never change state or action


const countReducer = (state = {count:0},action)=>{
    switch(action.type) {
        case 'INCREMENT':
        return{
            count: state.count+ action.incrementBy
        };
        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        };
        case 'RESET':
        return{
            count: 0
        };
        case 'SET':
        return{
            count: action.setTo
        };
        default:
        return state;
    }
    
}

const store = createStore(countReducer);


const unsubscribe = store.subscribe(()=> {
    console.log(store.getState());
});

//Actions - an object that gets sent to the store

//I'd like to increment the count
// store.dispatch(
//     {
//         type:'INCREMENT',
//         incrementBy: 5
//     }    
// );

store.dispatch(incrementCount({incrementBy:30}))
store.dispatch(decrementCount())
store.dispatch(resetCount())
store.dispatch(setCount())
// incrementCount1({incrementBy:50})

// store.dispatch(
//     {
//         type:'DECREMENT',
//         decrementBy: 5
//     }    
//     );

// incrementCount()
// incrementCount(10)
// incrementCount(34)
// incrementCount(1)

// store.dispatch(
//     {
//         type:'RESET'
//     }    
// );


// store.dispatch(
//     {
//         type:'SET',
//         count:101
//     }    
// );


//I'd like to reset the count to zero

