import React from 'react'
import { Slide } from '@saitonakamura/presa'
// import styled from 'styled-components'
import { ItH1, FragmentList, FragmentListItem } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const CheckPhaseSlide = props => (
  <Slide background={slideBackImg} {...props}>
    <ItH1 margin="50px" bordered>
      Фаза check
    </ItH1>
    <FragmentList>
      <FragmentListItem>setImmediate</FragmentListItem>
      <FragmentListItem>
        setImmediate в Pending callbacks или Poll гарантированно раньше чем
        таймер
      </FragmentListItem>
    </FragmentList>
  </Slide>
)
