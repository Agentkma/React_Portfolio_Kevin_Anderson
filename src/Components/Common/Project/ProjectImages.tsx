import React, { useState } from "react";
import styled from "styled-components";

import { mediaMin } from "../../../Theme";
import { content } from "../../../Assets/Content";
import ProjectImagesOverlaySlider from "./ProjectImageOverlaySlider";
import { ProjectIndex } from "shared/types";


const ProjectImages: React.FC< ProjectIndex> = ({ project }) => {
  const [showImageOverlaySlider, setShowImageOverlaySlider] = useState(false);

  const handleOverlayToggle = () => 
    setShowImageOverlaySlider((prev) => !prev);
   
  

  const { imgContainer } = content.projects[Number(project)];
  const images = imgContainer.map((img, index) => (
    <article
      key={index}
      onClick={() => {
        handleOverlayToggle();
      }}
    >
      <Simg
        alt={img.alt}
        title={img.title}
        src={require(`../../../${img.src}`)}
      />
    </article>
  ));

  return (
    <Ssection>
      {showImageOverlaySlider && (
        <ProjectImagesOverlaySlider
          onClick={handleOverlayToggle}
          project={project}
        
        />
      )}
      {images}
    </Ssection>
  );
};

export default ProjectImages;

// ! Styles

const Ssection = styled.section`
  box-sizing: border-box;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 0.5em;
  ${mediaMin.desktop` grid-template-columns:repeat(auto-fill, minmax(500px, 1fr));`};
`;

const Simg = styled.img`
  display: block;
  width: 100% !important;
  max-width: 100%;
  height: 100%;
  border: 0;
  &:hover {
    cursor: crosshair;
  }
`;