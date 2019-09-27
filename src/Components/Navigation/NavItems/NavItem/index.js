import React from "react";


// ! Internal

import { Sli, SnavLink } from '../../styled-components';

export const NavItem = props => (
    <Sli>
        <SnavLink to={props.link} exact={props.exact} onClick={props.click}>
            {props.children}
        </SnavLink>
    </Sli>
);

export default NavItem;

