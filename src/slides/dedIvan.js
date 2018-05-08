import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import SantaClausIcon from '../assets/svgReact/SantaClaus'
import CardsIcon from '../assets/svgReact/Poker'
import HeartIcon from '../assets/svgReact/Heart'
import styled from 'styled-components'
import { ItTitle } from '../blocks'
import { colors } from '../colors'
import { heartbeat, flip } from '../blocks/animations'

export const DevIvanSlide = props => (
  <Slide centered {...props}>
    <ItTitle bordered>Дед Иван Тулуп</ItTitle>
    <ImagesCont>
      <Fragment>
        <ColorCardsIcon size={200} />
      </Fragment>
      <SantaClausIcon size={300} />
      <Fragment>
        <ColorHeartIcon size={200} />
      </Fragment>
    </ImagesCont>
  </Slide>
)

const ImagesCont = styled.div`
  display: flex;
  align-items: flex-end;
`

const ColorCardsIcon = styled(CardsIcon)`
  color: ${colors.purpleDark};
  margin-right: 35px;
  animation: ${flip} 2s infinite;
`

const ColorHeartIcon = styled(HeartIcon)`
  color: ${colors.red};
  animation: ${heartbeat} 2s infinite;
`
