import React from 'react'
import { Slide } from '@saitonakamura/presa'
import nothingToDoHereImg from '../assets/images/nothing-to-do-here.png'
import styled from 'styled-components'
import { visuallyHidden } from '../blocks'

export const NothingToDoHereSlide = props => (
  <Slide background={nothingToDoHereImg} {...props}>
    <VisuallyHiddenFigure>
      <img src={nothingToDoHereImg} />
      <figcaption>Nothing to do here meme</figcaption>
    </VisuallyHiddenFigure>
  </Slide>
)

const VisuallyHiddenFigure = styled.figure`
  ${visuallyHidden};
`
