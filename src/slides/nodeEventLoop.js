import React from 'react'
import { Slide } from '@saitonakamura/presa'
import { FragmentList, FragmentListItem, Caption } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const NodeEventLoopSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <FragmentList>
      <FragmentListItem>Timers</FragmentListItem>
      <FragmentListItem>Pending callback</FragmentListItem>
      <FragmentListItem>Idle/prepare</FragmentListItem>
      <FragmentListItem>Poll</FragmentListItem>
      <FragmentListItem>Check</FragmentListItem>
      <FragmentListItem>Close</FragmentListItem>
    </FragmentList>
    <Caption>Фазы Event Loop в Node.js</Caption>
  </Slide>
)
