import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
// import HourglassIcon from '../assets/svgReact/Hourglass'
// import { colors } from '../colors'
import { ItH1, FragmentList, FragmentListItem } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const PendingCallbacksPhaseSlide = props => (
  <Slide background={slideBackImg} {...props}>
    <ItH1 margin="50px" bordered>
      Фаза pending callbacks
    </ItH1>
    <TwoColsLayout>
      <Info>
        <FragmentList>
          <FragmentListItem>
            Коллбэки от некоторых системных операций (TCP error)
          </FragmentListItem>
        </FragmentList>
      </Info>
    </TwoColsLayout>
  </Slide>
)

const TwoColsLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Info = styled.div``
