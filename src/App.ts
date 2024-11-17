// ! External
import React, { Component } from "react";
import styled, { ThemeProvider, StyledEngineProvider } from "styled-components";
import { Router } from "react-router";

// ! Internal
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import ErrorBoundary from "./ErrorBoundary";
import { theme } from "./Theme";
import Project1 from "./Pages/Project/Project1";
import Project2 from "./Pages/Project/Project2";
import Project3 from "./Pages/Project/Project3";
import Project4 from "./Pages/Project/Project4";
import Project5 from "./Pages/Project/Project5";
import Project6 from "./Pages/Project/Project6";
import Project7 from "./Pages/Project/Project7";
import Project8 from "./Pages/Project/Project8";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import { WorksFilterContext } from "./Context";
import { content } from "./Assets/Content";

const Div = styled.div`
  box-sizing: border-box;
`;

export const Main = styled.main`
  display: block;
  box-sizing: border-box;
  margin-left: 0;
  margin-top: 9vh;
  font-family: ${(props) => props.theme.fontFamilyPrimary};
`;

// Define the state interface
interface AppState {
  showWorksFilter: boolean;
  toggleWorksFilter: () => void;
}

class App extends Component<{}, AppState> {
  // ! Methods
  handleShowWorksFilter = () => {
    this.setState({ showWorksFilter: !this.state.showWorksFilter });
  };

  toggleWorksFilter = () => {
    this.setState(({ showWorksFilter }) => {
      return { showWorksFilter: !showWorksFilter };
    });
  };

  state: AppState = {
    showWorksFilter: false,
    toggleWorksFilter: this.toggleWorksFilter,
  };

  render() {
    return (
      <Div>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <ErrorBoundary>
              <WorksFilterContext.Provider value={this.state}>
                <Navigation />
                <Router>
                  <Main path="/">
                    <Home default path="/" />
                    <Project1 path="project1" />
                    <Project2 path="project2" />
                    <Project3 path="project3" />
                    <Project4 path="project4" />
                    <Project5 path="project5" />
                    <Project6 path="project6" />
                    <Project7 path="project7" />
                    <Project8 path="project8" />
                    <Contact path="contact" />
                    <About path="about" />
                    <Error path="error" />
                  </Main>
                </Router>
                <Footer content={content.footer.social} />
              </WorksFilterContext.Provider>
            </ErrorBoundary>
          </ThemeProvider>
        </StyledEngineProvider>
      </Div>
    );
  }
}

export default App;
