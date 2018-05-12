import React from 'react'
import { Slide } from '@saitonakamura/presa'
// import styled from 'styled-components'
import { ItH1, FragmentList, FragmentListItem } from '../blocks'

export const CheckPhaseSlide = props => (
  <Slide {...props}>
    <ItH1 margin="50px" bordered>
      Фаза check
    </ItH1>
    <FragmentList>
      <FragmentListItem>setImmediate</FragmentListItem>
      <FragmentListItem>
        setImmediate в I/O callback гарантированно раньше чем таймер
      </FragmentListItem>
    </FragmentList>
  </Slide>
)
