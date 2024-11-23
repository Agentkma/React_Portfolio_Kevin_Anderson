import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Slider from "react-styled-carousel";
import styled from "styled-components";

import { content } from "../../../Assets/Content";
import { mediaMin } from "../../../Theme";
import { ProjectIndex } from "shared/types";


export function ProjectCarousel1({ project }: ProjectIndex) {
  const { bannerImg } = content.projects[Number(project)];

  return (
    <Ssection>
      <Slider
        autoSlide={false}
        cardsToShow={1}
        infinite={false}
        padding="0 0"
        showArrows
        showDots={false}
        RightArrow={<SrightArrow />}
        LeftArrow={<SleftArrow />}
      >
        {bannerImg.map((img, index) => {
          const { alt, src, srcSet, title } = img;

          return (
            <picture key={index}>
              <source
                srcSet={require(`../../../${srcSet[0]}`)}
                type="image/png"
              />
              <Simg
                src={require(`../../../${src}`)}
                alt={alt}
                title={title}
              />
            </picture>
          );
        })}
      </Slider>
    </Ssection>
  );
}

export default ProjectCarousel1;

// ! Styles

const Ssection = styled.section`
  box-sizing: border-box;
  display: block;
  padding-bottom: 6rem;
`;

const Simg = styled.img`
  display: block;
  max-width: 100%;
  width: 100%;
  height: 91vh;
  border: 0;
  ${mediaMin.xlDesktop`
    width: 65vw;
    margin: auto;
  `};
`;

const SleftArrow = styled(ArrowBackIcon)`
  padding-left: 1rem;
  font-size: 4rem !important;
  cursor: pointer;
  position: absolute;
  left: 0;
  top: calc(50% - 5px);
  z-index: 1;
  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.2);
  }
`;

const SrightArrow = styled(ArrowForwardIcon)`
  padding-right: 1rem;
  font-size: 4rem !important;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: calc(50% - 5px);
  z-index: 1;
  &:hover {
    transition: all 0.5s ease-in-out;
    transform: scale(1.2);
  }
`;
