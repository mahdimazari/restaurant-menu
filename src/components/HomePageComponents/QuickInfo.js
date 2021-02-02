import React, { Component } from 'react'
import { Title } from '../../utils'
import {SectionButton} from '../../utils'
import styled from 'styled-components'
import {styles} from '../../utils'
export default class QuickInfo extends Component {
    render() {
        return (
          <section>
              <Title message="Let us tell you" title="Our Mission"></Title>
              <QuickInfoWrapper>
              <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nulla libero, blandit et lectus vitae,
              sagittis tempus ligula. Ut vel felis efficitur, venenatis nisl id, vehicula nunc. Phasellus viverra at magna eumpus. 
              Duis hendrerit aliquam libero, ac consectetur nulla tempus id. Vivamus non auctor lacus
              </p>
              <SectionButton style={{margin: '2rem auto'}}>About Us</SectionButton>
              </QuickInfoWrapper>
          </section>
        )
    }
}


const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2em;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`