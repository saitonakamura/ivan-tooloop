import React from 'react'
import { Slide } from '@saitonakamura/presa'
import haroldImg from '../assets/images/hide-the-pain-harold.jpg'
import styled from 'styled-components'
import { visuallyHidden } from '../blocks'

export const HaroldMemeSlide = props => (
  <Slide background={haroldImg} {...props}>
    <VisuallyHiddenFigure>
      <img src={haroldImg} />
      <figcaption>Harold That Hides a Pain meme</figcaption>
    </VisuallyHiddenFigure>
  </Slide>
)

const VisuallyHiddenFigure = styled.figure`
  ${visuallyHidden};
`
