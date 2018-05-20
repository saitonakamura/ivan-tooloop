import React from 'react'
import { Slide } from '@saitonakamura/presa'
import terminatorSantaImg from '../assets/images/terminator-santa.jpg'
import styled from 'styled-components'
import { visuallyHidden } from '../blocks'

export const TerminatorSantaSlide = props => (
  <Slide background={terminatorSantaImg} {...props}>
    <VisuallyHiddenFigure>
      <img src={terminatorSantaImg} />
      <figcaption>Terminator Santa</figcaption>
    </VisuallyHiddenFigure>
  </Slide>
)

const VisuallyHiddenFigure = styled.figure`
  ${visuallyHidden};
`
