import React, { useState, useCallback } from "react";
import styled, { ThemeProvider } from "styled-components";

import {
Outlet,
  Routes,
  Route
} from "react-router-dom";

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
import { WorksFilterContext } from "./context";

const Layout = () => { 
  return (
    <Main>
      <Navigation />
      <Outlet />
      <Footer />
    </Main>
  );
 }

const App: React.FC = () => {
  const [showWorksFilter, setShowWorksFilter] = useState<boolean>(false);

  const toggleWorksFilter = useCallback(() => {
    setShowWorksFilter((prev) => !prev);
  }, []);

  return (
    <Div>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <WorksFilterContext.Provider
            value={{ showWorksFilter, toggleWorksFilter }}
          >
                <Routes>
                  <Route  element={<Layout/>} > 
                    <Route index element={<Home />} />
                    <Route path="project1" element={<Project1 />} />
                    <Route path="project2" element={<Project2 />} />
                    <Route path="project3" element={<Project3 />} />
                    <Route path="project4" element={<Project4 />} />
                    <Route path="project5" element={<Project5 />} />
                    <Route path="project6" element={<Project6 />} />
                    <Route path="project7" element={<Project7 />} />
                    <Route path="project8" element={<Project8 />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<Error />} />
                  </Route>
                 
                  
                </Routes>
                

         
          </WorksFilterContext.Provider>
        </ErrorBoundary>
      </ThemeProvider>
    </Div>
  );
};

App.displayName = "Kevin Anderson Portfolio";

export default App;

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
