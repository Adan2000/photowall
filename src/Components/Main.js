import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route, Link } from "react-router-dom";
import { removePost } from "../redux/action";
import Single from "./Single";

//we passed the contents of our store as props to photowall
//its recommended in redux that we have one component that fetches from our store
//and renders it to its sub component
//you ONLY ever want to connect your store to TOP level components
//NEVER connect to every single component that you have.
//UNLESS you have like 5+ sub components, then you can break that rule
//AND inject that store directly to your child component

class Main extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>
          <Link to="/"> Photowall </Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path="/single/:id"
          render={(params) => <Single {...this.props} {...params} />}
        />
      </div>
    );
  }
}
export default Main;

//Connected Component Re-Cap
//we create a store inside index.js, const store = createStore(rootReducer)
//we added that to our Provider component, store={store}
//we then used a reducer to populate that store with state, we got that state from our data.js
//we then made a container component App.js, that passed down the store to our Main.js
