import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import {
  FragmentList,
  FragmentListItem,
  Caption,
  RenderWhenActiveFragment,
} from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'
import wtfImg from '../assets/images/wtf.jpg'

export const NodeEventLoopSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <FragmentList>
      <FragmentListItem>Timers</FragmentListItem>
      <FragmentListItem>Pending callback</FragmentListItem>
      <FragmentListItem>Idle, prepare</FragmentListItem>
      <FragmentListItem>Poll</FragmentListItem>
      <FragmentListItem>Check</FragmentListItem>
      <FragmentListItem>Close callbacks</FragmentListItem>
    </FragmentList>
    <RenderWhenActiveFragment>
      <Img src={wtfImg} />
    </RenderWhenActiveFragment>
    <Caption>Фазы Event Loop в Node.js</Caption>
  </Slide>
)

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
