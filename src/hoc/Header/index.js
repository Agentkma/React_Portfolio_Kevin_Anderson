import React, { Component } from "react";
import styled from "styled-components";

export const Header = styled.header`
    height: 15vh;
    background: lightblue;
`;

import React, { Component } from "react";

export default class index extends Component {
    render() {
        return (
            <div>
                <Header>{this.props.children}</Header>;
            </div>
        );
    }
}
