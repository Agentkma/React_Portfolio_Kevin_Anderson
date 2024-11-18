import styled from "styled-components";

import { content,BannerImg } from "../../../Assets/Content";
import { mediaMin } from "../../../Theme";
import {
    SsectionParallax,
    SarticleMainHeading,
    SdivValign
} from "../../../shared/StyledComponents";
import { ProjectIndex } from "shared/types";

const renderBgSections = (bannerImg:BannerImg[]) => {
    return bannerImg.map((img, index) => {
        const { overLay, src } = img;

        const style = {
            backgroundImage: "url(" + require(`../../../${src}`) + ")"
        };

        return (
            <Ssection key={index} style={style}>
                <Soverlay>
                    <SdivValign>
                        <Sh1>{overLay}</Sh1>
                    </SdivValign>
                </Soverlay>
            </Ssection>
        );
    });
};

const ProjectParallax = ({ project }: ProjectIndex) => {
    const { bannerImg } = content.projects[Number(project)];

    return <>{renderBgSections(bannerImg)}</>;
};

export default ProjectParallax;

// ! Styles

const Ssection = styled(SsectionParallax)`
    height: 95vh;

    background-image: url();
`;

const Soverlay = styled(SarticleMainHeading)`
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.4s linear;
    background-color: rgba(0, 0, 0, 0.8);
    ${Ssection}:hover & {
        opacity: 1;
    }
    ${mediaMin.desktop`
    margin: auto;
    text-align: center;`};
`;

const Sh1 = styled.h1`
    color: white;
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.1;
    font-weight: 500;
`;
