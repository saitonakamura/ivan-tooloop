import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { ItH1, Paper } from '../blocks'
import { createMoveAndDisappear } from '../blocks/animations'

export const BrowserPrioritiesSlide = props => (
  <Slide {...props}>
    <ItH1 bordered>Приоритеты браузеров и очереди задач</ItH1>
    <Container>
      <TaskQueue>
        <Task delay="8s" toX="663px" toY="133px" onAnimationEnd={hideElement}>
          <Paper>onClick</Paper>
        </Task>
        <Task delay="6s" toX="603px" toY="133px" onAnimationEnd={hideElement}>
          <Paper>onChange</Paper>
        </Task>
        <Task delay="2s" toX="473px" toY="133px" onAnimationEnd={hideElement}>
          <Paper>onFocus</Paper>
        </Task>
      </TaskQueue>
      <TaskQueue>
        <Task delay="14s" toX="603px" toY="0px" onAnimationEnd={hideElement}>
          <Paper>setTimeout</Paper>
        </Task>
        <Task delay="10s" toX="523px" toY="0px" onAnimationEnd={hideElement}>
          <Paper>setInterval</Paper>
        </Task>
      </TaskQueue>
      <TaskQueue>
        <Task delay="12s" toX="613px" toY="-123px" onAnimationEnd={hideElement}>
          <Paper>postMessage</Paper>
        </Task>
        <Task delay="4s" toX="543px" toY="-123px" onAnimationEnd={hideElement}>
          <Paper>postMessage</Paper>
        </Task>
      </TaskQueue>
    </Container>
  </Slide>
)

const hideElement = event => (event.target.style.visibility = 'hidden')

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  > * > * {
    margin-bottom: 50px;
  }
`

const TaskQueue = styled.div`
  display: flex;
  > * > * {
    margin-left: 20px;
  }
`

const Task = styled.div`
  animation-name: ${p => createMoveAndDisappear(p.toX, p.toY)};
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-delay: ${p => p.delay};
`
