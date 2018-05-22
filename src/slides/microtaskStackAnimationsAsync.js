import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import slideBackImg from '../assets/images/slide-back.png'

export const MicrotaskStackAnimationsAsyncSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Figure>
      <Figcaption>Анимации поясняющие первый пример</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure`
  margin: 0;
  padding: 0;
`

const Figcaption = styled.figcaption``
