import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import HourglassIcon from '../assets/svgReact/Hourglass'
import { colors } from '../colors'
import { ItH2 } from '../blocks'

export const TimersPhaseSlide = props => (
  <Slide {...props}>
    <ItH2 margined>Фаза таймеров</ItH2>
    <TwoSideLayout>
      <TimersInfo>1 2 3</TimersInfo>
      <TimersLogo>
        <HourglassIcon size={300} color={colors.purple} />
      </TimersLogo>
    </TwoSideLayout>
  </Slide>
)

const TwoSideLayout = styled.div`
  display: flex;
`

const TimersInfo = styled.div`
  flex: 0 0 50%;
`

const TimersLogo = styled.div`
  flex: 0 0 50%;
`
