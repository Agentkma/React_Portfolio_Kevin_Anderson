import { Link } from "react-router-dom";
import styled from "styled-components";

import { content } from "../../../Assets/Content";
import { Scontainer, Srow } from "../../../shared/StyledComponents";
import prevSvg from "../../../Assets/Images/prev.svg";
import gridSvg from "../../../Assets/Images/grid.svg";
import nextSvg from "../../../Assets/Images/next.svg";

interface ProjectNavProps {
  gridNavHref: string;
}

const getPrevProject = ({ currentIndex }: { currentIndex: number }): string => {
  let prevIndex =
    (currentIndex - 1 + content.projects.length) % content.projects.length;

  return content.projects[prevIndex].url;
};

const getNextProject = ({ currentIndex }: { currentIndex: number }): string => {
  let nextIndex = (currentIndex + 1) % content.projects.length;
  return content.projects[nextIndex].url;
};

const getCurrentIndex = (currentProject: string): number =>
  content.projects.findIndex((project) => project.url === currentProject);

function ProjectNav({ gridNavHref }: ProjectNavProps) {
  const currentProject = window.location.pathname.split("/").join("");

  const currentIndex = getCurrentIndex(currentProject);

  const prevProject = getPrevProject({ currentIndex });
  const nextProject = getNextProject({ currentIndex });

  return (
    <Ssection>
      <Scontainer>
        <Srow>
          <Sarticle>
            <Sul>
              <Sli>
                <Link to={`/${prevProject}`}>
                  <Simg
                    alt="left arrow"
                    title="left arrow button"
                    src={prevSvg}
                  />
                </Link>
              </Sli>
              <Sli>
                <a href={`#${gridNavHref}`}>
                  <Simg
                    alt="image grid icon"
                    title="image grid icon"
                    src={gridSvg}
                  />
                </a>
              </Sli>
              <Sli>
                <Link to={`/${nextProject}`}>
                  <Simg
                    alt="right arrow"
                    title="right arrow button"
                    src={nextSvg}
                  />
                </Link>
              </Sli>
            </Sul>
          </Sarticle>
        </Srow>
      </Scontainer>
    </Ssection>
  );
}

export default ProjectNav;

// ! Styles

const Ssection = styled.section`
  margin-top: 3rem;
  background-color: ${(props) => props.theme.colorBgTertiary};
`;

const Sarticle = styled.article`
  padding-top: 0 !important;
  padding-left: 0 !important;
  padding-bottom: 0 !important;
  padding-right: 0 !important;
`;

const Sul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 2.5rem 0;
  text-align: center;
`;

const Sli = styled.li`
  display: inline-block;
  margin: 5px;
  background-color: ${(props) => props.theme.colorBgPrimary};
  padding: 1.5rem;
  border-radius: 50%;
  list-style-type: none;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease-in;
    background-color: ${(props) => props.theme.colorFontHoverPrimary};
  }
`;

const Simg = styled.img`
  width: 1.5rem;
`;