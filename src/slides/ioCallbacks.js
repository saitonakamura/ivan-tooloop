import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
// import HourglassIcon from '../assets/svgReact/Hourglass'
// import { colors } from '../colors'
import { ItH1, FragmentList, FragmentListItem } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const IOCallbacksPhaseSlide = props => (
  <Slide background={slideBackImg} {...props}>
    <ItH1 margin="50px" bordered>
      Фаза оставшихся I/O колбэков
    </ItH1>
    <TwoColsLayout>
      <TimersInfo>
        <FragmentList>
          <FragmentListItem>
            Все колбэки от I/O c предыдущего тика
          </FragmentListItem>
          <FragmentListItem>
            setImmediate чуть лучше чем таймеры
          </FragmentListItem>
        </FragmentList>
      </TimersInfo>
      <TimersLogo>
        {/* <HourglassIcon size={300} color={colors.purpleDark} /> */}
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
