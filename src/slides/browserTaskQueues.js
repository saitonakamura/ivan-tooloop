import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { Paper, Divider, Caption } from '../blocks'
import { createMoveAndDisappear, heartbeat } from '../blocks/animations'
import { colors } from '../colors'
import HeartIcon from '../assets/svgReact/Heart'
import slideBackImg from '../assets/images/slide-back.png'

const step = 4

const stepsDelay = count => `${step * count + 4}s`

export const BrowserPrioritiesSlide = props => (
  <Slide background={slideBackImg} {...props}>
    <Container>
      <TaskQueue>
        <QueueName>User interaction</QueueName>
        <Task
          delay={stepsDelay(4)}
          toX="513px"
          toY="133px"
          onAnimationEnd={hideElement}
        >
          <Paper>onClick</Paper>
        </Task>
        <Task
          delay={stepsDelay(3)}
          toX="413px"
          toY="133px"
          onAnimationEnd={hideElement}
        >
          <Paper>onChange</Paper>
        </Task>
        <Task
          delay={stepsDelay(1)}
          toX="283px"
          toY="133px"
          onAnimationEnd={hideElement}
        >
          <Paper>onFocus</Paper>
        </Task>
      </TaskQueue>
      <Divider style={{ width: '80%' }} />
      <TaskQueue>
        <QueueName>Timeouts</QueueName>
        <Task
          delay={stepsDelay(7)}
          toX="545px"
          toY="0px"
          onAnimationEnd={hideElement}
        >
          <Paper>setTimeout</Paper>
        </Task>
        <Task
          delay={stepsDelay(5)}
          toX="410px"
          toY="0px"
          onAnimationEnd={hideElement}
        >
          <Paper>setInterval</Paper>
        </Task>
      </TaskQueue>
      <Divider style={{ width: '80%' }} />
      <TaskQueue>
        <QueueName>Post messages</QueueName>
        <Task
          delay={stepsDelay(6)}
          toX="490px"
          toY="-123px"
          onAnimationEnd={hideElement}
        >
          <Paper>postMessage</Paper>
        </Task>
        <Task
          delay={stepsDelay(2)}
          toX="370px"
          toY="-123px"
          onAnimationEnd={hideElement}
        >
          <Paper>postMessage</Paper>
        </Task>
      </TaskQueue>
      <ColorHeartIcon size={150} />
    </Container>
    <Caption>Приоритеты браузеров и очереди задач</Caption>
  </Slide>
)

const hideElement = event => (event.target.style.visibility = 'hidden')

const Task = styled.div`
  animation-name: ${p => createMoveAndDisappear(p.toX, p.toY)};
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-delay: ${p => p.delay};
`

const TaskQueue = styled.div`
  display: flex;
  z-index: 1;
  ${Task} + ${Task} {
    margin-left: 20px;
  }
`

const Container = styled.div`
  position: relative;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`

const QueueName = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;
  font-weight: bold;
`

const ColorHeartIcon = styled(HeartIcon)`
  color: ${colors.red};
  animation: ${heartbeat} ${step}s 7;
  animation-delay: 8.8s;
  position: absolute;
  right: -3%;
  top: 25%;
`
