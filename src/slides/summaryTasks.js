import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'

export const TasksSummarySlide = props => (
  <Slide centered {...props}>
    <Figure>
      <figcaption>Итоги по таскам</figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``
