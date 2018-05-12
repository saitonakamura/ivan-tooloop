import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import { ItH1 } from '../blocks'
import styled from 'styled-components'

export const NodeEventLoopSlide = props => (
  <Slide centered {...props}>
    <ItH1 bordered>Фазы Event Loop в Node.js</ItH1>
    <PhaseList>
      <Fragment>
        <Phase>Timers</Phase>
      </Fragment>
      <Fragment>
        <Phase>I/O callback</Phase>
      </Fragment>
      <Fragment>
        <Phase>Idle/prepare</Phase>
      </Fragment>
      <Fragment>
        <Phase>Poll</Phase>
      </Fragment>
      <Fragment>
        <Phase>Check</Phase>
      </Fragment>
      <Fragment>
        <Phase>Close</Phase>
      </Fragment>
    </PhaseList>
  </Slide>
)

const PhaseList = styled.ul`
  font-size: 2.5rem;
`

const Phase = styled.li`
  text-align: left;
  list-style-type: circle;
`
