import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'

export const MicrotaskStackAnimationsSyncSlide = props => (
  <Slide centered {...props}>
    <Figure>
      <Figcaption>Анимации поясняющие второй пример</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure`
  margin: 0;
  padding: 0;
`

const Figcaption = styled.figcaption``
