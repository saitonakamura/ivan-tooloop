import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'

export const MaterialsSlide = props => (
  <Slide centered {...props}>
    <Figure>
      <figcaption>Материалы при подготовке</figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``
