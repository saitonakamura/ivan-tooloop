import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'

export const MicrotasksSummarySlide = props => (
  <Slide centered {...props}>
    <Figure>
      <figcaption>Итоги по микротаскам</figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``
