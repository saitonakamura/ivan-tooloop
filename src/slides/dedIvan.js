import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import SantaClausIcon from '../assets/svgReact/SantaClaus'
import CardsIcon from '../assets/svgReact/Poker'
import HeartIcon from '../assets/svgReact/Heart'
import styled from 'styled-components'
import { ItTitle, RenderWhenActiveFragment } from '../blocks'
import { colors } from '../colors'
import { heartbeat, flip } from '../blocks/animations'

export const DevIvanSlide = props => (
  <Slide centered {...props}>
    <ItTitle bordered>Дед Иван Тулуп</ItTitle>
    <ImagesCont>
      <IconCont>
        <RenderWhenActiveFragment>
          <ColorCardsIcon size={200} />
        </RenderWhenActiveFragment>
      </IconCont>
      <IconCont>
        <SantaClausIcon size={300} />
      </IconCont>
      <IconCont>
        <RenderWhenActiveFragment>
          <ColorHeartIcon size={200} />
        </RenderWhenActiveFragment>
      </IconCont>
    </ImagesCont>
  </Slide>
)

const ImagesCont = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
`

const ColorCardsIcon = styled(CardsIcon)`
  color: ${colors.purpleDark};
  margin-right: 35px;
  animation: ${flip} 2s 1;
`

const ColorHeartIcon = styled(HeartIcon)`
  color: ${colors.red};
  animation: ${heartbeat} 2s 1;
`

const IconCont = styled.div`
  flex: 0 0 33%;
`
