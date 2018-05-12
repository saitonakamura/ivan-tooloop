import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
// import HourglassIcon from '../assets/svgReact/Hourglass'
// import { colors } from '../colors'
import { ItH1, FragmentList, FragmentListItem } from '../blocks'

export const IOCallbacksPhaseSlide = props => (
  <Slide {...props}>
    <ItH1 margin="50px" bordered>
      Фаза I/O колбэков
    </ItH1>
    <TwoColsLayout>
      <TimersInfo>
        <FragmentList>
          <FragmentListItem>Все колбэки от I/O</FragmentListItem>
          <FragmentListItem>Круто делать setImmediate</FragmentListItem>
          <FragmentListItem>
            Имеет лимит по кол-ву колбеков чтобы не виснуть
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
