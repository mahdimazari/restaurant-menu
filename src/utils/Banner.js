import React from 'react'
import styled from 'styled-components'
import {styles} from '../utils'
 function Banner({title, subtitle, children}) {
        return (
            <BannerWrapper>
                <h1>{title}</h1>
                <h2>{subtitle}</h2> 
                {children}
            </BannerWrapper>
        )
}

const BannerWrapper = styled.div`
margin-bottom: 3rem;
text-align: center;
.title{
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing};
}
.subtitle{
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing};
    font-size:1.5rem;
    text-transform: capitalize;
}
`
Banner.defaultProps={
    title: 'Default title',
    subtitle: 'Default subtitle'
}
export default Banner