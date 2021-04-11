

//A Reducer is just a function 
//Reducer function takes in 2 arguements
//first is current state, that is going to live in our store
//second arguemnt is our action, action describe an event, wehn that event is triggered
//the end goal of that action is to change the state. 


//so the reducer with the current state and the action...
//it decides how to transform the current state of our app that lives inside of our store...
//into a updated state, based on the action it just recieved...

import posts from '../Components/posts'

const postReducer = function posts(state = posts, action) {
    console.log(action.index)
    switch (action.type){
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return [...state, action.post]
        default: return state
    }
}

export default postReducer;


//then we import it
//we set our initial state in our reducer funtion to that post variable data that we imported. 



