import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import NavItems from "./NavItems";

const Nav = styled.nav`
    display: block !important;
    display: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 101;
    box-sizing: border-box;
    @media (max-width: 768px) {
        display: block;
    }
`;

const Navigation = () => {
    return (
        <Nav role="navigation">
            <NavItems />
        </Nav>
    );
};

Navigation.propTypes = {};

export default Navigation;

{
    /* <nav role="navigation" class="mobile-nav signature-karl">
    <ul class="slimmenu">
        <li>
            <a href="index.html">portfolio</a>
        </li>
        <li><a href="about.html">about</a></li>
        <!-- <li><a href="journal.html">journal</a></li> -->
        <li>
            <a class="sub-collapser" href="#">project</a>
            <ul>
                <li><a href="project01.html">100</a></li>
                <li><a href="project02.html">200</a></li>
                <li><a href="project03.html">300</a></li>
                <li><a href="project04.html">400</a></li>
                <li><a href="project05.html">500</a></li>
                <li><a href="project06.html">600</a></li>
                <li><a href="project07.html">700</a></li>
                <li><a href="project08.html">800</a></li>
            </ul>
        </li>
        <li><a href="contact.html">say hello</a></li>
    </ul>
</nav> */
}
