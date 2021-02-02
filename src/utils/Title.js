import React from 'react'
import styled from 'styled-components'
import {styles} from '../utils'

function Title({title, message}) {
    return (
        <TitleWrapper>
            <h3 className="message">{message}</h3>
            <h1 className="title">{title}</h1>
            <div className="underline"> </div>
        </TitleWrapper>
    )
}

Title.defaultProps = {
    message: 'our message',
    title: 'our title'
}

const TitleWrapper = styled.div`
    text-align: center;
    .message{
        margin-top: 30px;
        ${styles.textSlanted};
        ${styles.letterSpacing};
        font-size: 1.5rem;
        color: ${styles.colors.mainYellow};
    }
    .title{
        ${styles.letterSpacing};
        font-size: 1.75rem;
       
    }
    .underline{
        width: 5rem;
        height: 0.2rem;
        background: ${styles.colors.mainYellow};
        margin: auto;
    }
`

export default Title