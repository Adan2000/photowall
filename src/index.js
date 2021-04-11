import React from 'react'
import ReactDOM from 'react-dom'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './Components/App'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
document.getElementById('root'))

//we first go to the terminal, type in cd .. 
//we then do npm install react-redux 

//we wrap everything in our provider
//we then put the store in our provider

//we pass our store to our Main component, which is the highest component
