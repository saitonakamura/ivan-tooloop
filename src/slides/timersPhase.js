import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import HourglassIcon from '../assets/svgReact/Hourglass'
import { colors } from '../colors'
import { ItH1, FragmentList, FragmentListItem } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const TimersPhaseSlide = props => (
  <Slide background={slideBackImg} {...props}>
    <ItH1 margin="50px" bordered>
      Фаза таймеров
    </ItH1>
    <TwoColsLayout>
      <TimersInfo>
        <FragmentList>
          <FragmentListItem>
            Исполняет колбеки готовых таймеров
          </FragmentListItem>
          <FragmentListItem>setTimeout и setInterval</FragmentListItem>
          <FragmentListItem>НЕ setImmediate</FragmentListItem>
        </FragmentList>
      </TimersInfo>
      <TimersLogo>
        <HourglassIcon size={300} color={colors.purpleDark} />
      </TimersLogo>
    </TwoColsLayout>
  </Slide>
)

const TwoColsLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TimersInfo = styled.div``

const TimersLogo = styled.div``
