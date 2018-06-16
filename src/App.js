// ! External
import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

// ! Internal
import asyncComponent from "./hoc/asyncComponent/asyncComponent";
import Layout from "./hoc/Layout";
import logo from "./logo.svg";
import "./App.css";

// ! Example async component...?
// const asyncCheckout = asyncComponent(() => {
//   return import('./containers/Checkout/Checkout');
// });

class App extends Component {
    render() {
        return (
            <div className="App">
                <Layout>
                    <Route path="/" component={home} />
                    {/* <Route path="/project1" component={project1} />
                    <Route path="/project2" component={project2} />
                    <Route path="/contact" component={contact} />
                    <Route path="/about" component={about} /> */}
                    <Redirect to="/" />
                </Layout>
            </div>
        );
    }
}

export default App;
