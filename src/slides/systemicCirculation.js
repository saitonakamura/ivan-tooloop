import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import HeartIcon from '../assets/svgReact/Heart'
import BloodVesselIcon from '../assets/svgReact/BloodVessel'
import styled from 'styled-components'
import { Paper } from '../blocks'
import { colors } from '../colors'
import { draw, heartbeat } from '../blocks/animations'
import slideBackImg from '../assets/images/slide-back.png'

export const SystemicCirculationSlide = props => (
  <Slide background={slideBackImg} {...props}>
    <Container>
      <TaskCards>
        <ColorHeartIcon size={300} id="heartToStopSystemic" />
        <RevealAndDisapearFragment>
          <TaskCard>
            Выполняем код <br /> из скрипта
          </TaskCard>
          <RefreshDraw size={400} />
        </RevealAndDisapearFragment>
        <RevealAndDisapearFragment>
          <TaskCard>
            Нажали на кнопку: <br />обработчик события
          </TaskCard>
          <RefreshDraw size={400} />
        </RevealAndDisapearFragment>
        <RevealAndDisapearFragment>
          <TaskCard>Сработал setTimeout</TaskCard>
          <RefreshDraw size={400} />
        </RevealAndDisapearFragment>
        <RevealAndDisapearFragment>
          <TaskCard>
            И еще много <br /> разных источников
          </TaskCard>
        </RevealAndDisapearFragment>
        <RevealAndDisapearFragment />
      </TaskCards>
    </Container>
  </Slide>
)

const Container = styled.div`
  display: flex;
  margin: 50px 0;
  align-items: flex-end;
  height: 100%;
`

const TaskCards = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  position: absolute;
  top: 20%;
  left: 20%;
`

const ColorHeartIcon = styled(HeartIcon)`
  color: ${colors.red};
  animation: ${heartbeat} 5s infinite;
`

const TaskCard = Paper.extend`
  position: absolute;
  font-size: 1.8em;
  z-index: 1;
  top: 40%;
  left: 0%;
  transform: translateY(-50%);
`

const RevealAndDisapearBehaviour = ({ current, active, ...rest }) =>
  current ? <div {...rest} /> : null

const RevealAndDisapearFragment = props => (
  <Fragment {...props} behaviour={RevealAndDisapearBehaviour} />
)

const RefreshDraw = styled(BloodVesselIcon)`
  position: absolute;
  top: -15%;

  path {
    fill-opacity: 0;
    stroke: ${colors.red};
    stroke-width: 10;
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: ${draw} 7s 1;
  }
`
