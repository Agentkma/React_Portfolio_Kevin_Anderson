import React, { useState } from 'react'
import { func } from 'prop-types'


// ! Internal

import NavItem from "./NavItem";
import { SLi, SsubLi, SnavItem, Ul, Sul } from '../styled-components'
import { ScaleInVerTop } from "../../../Theme/animations";
import { content } from "../../../Assets/Content";



function NavItems({ click }) {

    const [projectListOpen, setProjectListOpen] = useState(false);

    const projectListClickHandler = () => {
        setProjectListOpen(!projectListOpen)
    }


    const renderProjectSubul = () => {
        const { projects } = content;
        return projects.map((project, index) => {
            const { url, id } = project;

            return (
                <SsubLi key={index}>
                    <SnavItem to={`/${url}`} onClick={click}>
                        {id}
                    </SnavItem>
                </SsubLi>
            );
        });
    };

    return (
        <Ul>
            <NavItem link="/" exact click={click}>
                Portfolio
                </NavItem>
            <NavItem link="/about" click={click}>
                About
                </NavItem>
            <SLi
                onClick={projectListClickHandler}

            >
                Project View
                {projectListOpen && (<ScaleInVerTop><Sul>{renderProjectSubul()}</Sul></ScaleInVerTop>)
                }

            </SLi>
            <NavItem link="/contact" click={click}>
                Say Hello
                </NavItem>
        </Ul>
    );

}

NavItems.propTypes = {
    click: func,
}

export default NavItems






