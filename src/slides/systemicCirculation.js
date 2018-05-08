import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import HeartIcon from '../assets/svgReact/Heart'
import styled from 'styled-components'
import { ItH1, Paper } from '../blocks'
import { colors } from '../colors'

export const SystemicCirculationSlide = props => (
  <Slide {...props}>
    <ItH1 bordered>Большой круг кровообращения браузера</ItH1>
    <Container>
      <TaskCards>
        <ColorHeartIcon size={300} />
        <RevealAndDisapearFragment>
          <TaskCard>Выполняем код из скрипта</TaskCard>
        </RevealAndDisapearFragment>
        <RevealAndDisapearFragment>
          <TaskCard>Нажали на кнопку: обработчик события</TaskCard>
        </RevealAndDisapearFragment>
        <RevealAndDisapearFragment>
          <TaskCard>Сработал setTimeout</TaskCard>
        </RevealAndDisapearFragment>
        <RevealAndDisapearFragment>
          <TaskCard>И еще много разных источников</TaskCard>
        </RevealAndDisapearFragment>
        <RevealAndDisapearFragment />
      </TaskCards>
    </Container>
  </Slide>
)

const Container = styled.div`
  display: flex;
  margin: 50px 0;
  ${'' /* align-items: flex-end; */};
`

const TaskCards = styled.div`
  position: relative;
`

const ColorHeartIcon = styled(HeartIcon)`
  color: ${colors.red};
  ${'' /* animation: ${heartbeat} 2s infinite; */};
`

const TaskCard = Paper.extend`
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
`

const RevealAndDisapearBehaviour = styled.div`
  transition: opacity 0.2s ease-in;
  opacity: ${p => (p.current ? 1 : 0)};
`

const RevealAndDisapearFragment = props => (
  <Fragment {...props} behaviour={RevealAndDisapearBehaviour} />
)
