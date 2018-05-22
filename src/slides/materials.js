import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import slideBackImg from '../assets/images/slide-back.png'

export const MaterialsSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Figure>
      <figcaption>Материалы при подготовке</figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``
