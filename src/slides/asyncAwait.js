import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
// import styled from 'styled-components'
import slideBackImg from '../assets/images/slide-back.png'
import { ItTitle, ItCode } from '../blocks'

export const AsyncAwaitSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <ItTitle>
      🤔
      <Code>async await ?</Code>
    </ItTitle>
    <Fragment>
      <ItTitle>
        <Code>= Promise</Code>
      </ItTitle>
    </Fragment>
  </Slide>
)

const Code = ItCode.extend`
  font-size: 1.2em;
`
