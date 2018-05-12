import React from 'react'
import { Slide } from '@saitonakamura/presa'
import { ItH1, FragmentList, FragmentListItem } from '../blocks'

export const NodeEventLoopSlide = props => (
  <Slide centered {...props}>
    <ItH1 bordered>Фазы Event Loop в Node.js</ItH1>
    <FragmentList>
      <FragmentListItem>Timers</FragmentListItem>
      <FragmentListItem>I/O callback</FragmentListItem>
      <FragmentListItem>Idle/prepare</FragmentListItem>
      <FragmentListItem>Poll</FragmentListItem>
      <FragmentListItem>Check</FragmentListItem>
      <FragmentListItem>Close</FragmentListItem>
    </FragmentList>
  </Slide>
)
