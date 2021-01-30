import React, { Component } from 'react'
import {Link} from 'gatsby';
import logo from '../../../images/logo-black.png';
import styled from 'styled-components';
import { FaAlignRight } from 'react-icons/fa';
export default class NavbarHeader extends Component {
    render() {
        const { handleNavbar } = this.props;
        return (
            <HeaderWrapper>
                <Link>
                <img src={logo} className="logo" width="150px" alt="company name" />
                </Link>
            <FaAlignRight 
            className="toggle-icon"
            onClick={ () => {
                handleNavbar()
            } }
            />
            </HeaderWrapper>
             
        )
    }
}


const HeaderWrapper = styled.div`
padding: 0.4rem 1rem;
display: flex;
align-items: center;
justify-content: space-between;
.toggle-icon{
    font-size:1.75rem;
    color: blue;
    margin-top: -10px;
    cursor: pointer;
}
.logo{
    width: 150px;  
}
@media (min-width: 768px) {
    .toggle-icon {
        display: none;
    }
}
`