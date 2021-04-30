import Main from "./Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/action"
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default App;

//we import the connect from redux since it is what will be injecting data into our component
//we import the component that we want to have access to state, in our case it is App
//we use a function that will take in our state and return it as props
//this App.js acts as acontainer component.
//its only job is to provide the data to its presentational component in this case Main
//presentational component is what recieves the data via props

//we then make a App constant using the connect, inside it takes in two args
//the function with the state and the component we imported

//we want to pass our store to Main component
//so first have to connect our Main to the redux store so that we can acccess the data
//the posts state that lives inside of our store.
//connect will inject the props into a certain component
