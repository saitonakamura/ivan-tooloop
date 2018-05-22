import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import slideBackImg from '../assets/images/slide-back.png'

export const AsyncAwaitSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Figure>
      <figcaption>Информация по async await</figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``
