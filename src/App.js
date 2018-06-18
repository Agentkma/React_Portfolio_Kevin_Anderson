// ! External
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled, { withTheme, ThemeProvider } from "styled-components";

// ! Internal
// import asyncComponent from "./hoc/asyncComponent";
import Layout from "./hoc/Layout";
import Home from "./Pages/Home";
import { theme } from "./Theme";

// ! Example async component...?
// const asyncCheckout = asyncComponent(() => {
//   return import('./containers/Checkout/Checkout');
// });

const Div = styled.div`
    box-sizing: border-box;
`;

class App extends Component {
    render() {
        return (
            <Div>
                <ThemeProvider theme={theme}>
                    <Layout theme={theme}>
                        <Switch>
                            <Route path="/" component={Home} />
                            {/* <Route path="/project1" component={project1} />
                    <Route path="/project2" component={Project2} />
                      <Route path="/project3" component={Project3} />
                        <Route path="/project4" component={Project4} />
                          <Route path="/project5" component={Project5} />
                            <Route path="/project6" component={Project6} />
                              <Route path="/project7" component={Project7} />
                                <Route path="/project8" component={Project8} />
                    <Route path="/contact" component={contact} />
                    <Route path="/about" component={about} /> */}
                            <Redirect to="/" />
                        </Switch>
                    </Layout>
                </ThemeProvider>
            </Div>
        );
    }
}

export default withTheme(App);
