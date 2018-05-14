import React from 'react'
import { Slide } from '@saitonakamura/presa'
import allGonnaDanceImg from '../assets/images/all-gonna-dance.jpg'
import styled from 'styled-components'
import { visuallyHidden, ItTitle } from '../blocks'

export const AllGonnaExecuteSlide = props => (
  <Slide {...props} layout={children => <PlainLayout>{children}</PlainLayout>}>
    <Figure>
      <Img src={allGonnaDanceImg} />
      <CenterItTitle>Выполняем всё!</CenterItTitle>
      <HiddenFigcaption>Harold That Hides a Pain meme</HiddenFigcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`

const HiddenFigcaption = styled.figcaption`
  ${visuallyHidden};
`

const PlainLayout = styled.div`
  width: 100%;
  height: 100%;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const CenterItTitle = ItTitle.extend`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: bold;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.2);
`
