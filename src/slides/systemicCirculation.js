import React from 'react'
// import { findDOMNode } from 'react-dom'
import { Slide, Fragment } from '@saitonakamura/presa'
import HeartIcon from '../assets/svgReact/Heart'
import BloodVesselIcon from '../assets/svgReact/BloodVessel'
import styled from 'styled-components'
import { ItH1, Paper } from '../blocks'
import { colors } from '../colors'
import { draw, heartbeat } from '../blocks/animations'
// import Button from '../blocks/button'

let heartRef

export const SystemicCirculationSlide = props => (
  <Slide {...props}>
    {/* <ItH1 bordered>Большой круг кровообращения браузера</ItH1> */}
    <Container>
      <TaskCards>
        <ColorHeartIcon size={300} innerRef={ref => (heartRef = ref)} />
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
    {/* <ButtonContainer>
      <Button
        onClick={() => {
          if (!heartRef) return

          findDOMNode(heartRef).style['animation-iteration-count'] = 0
        }}
      >
        Тромб
      </Button>
    </ButtonContainer> */}
  </Slide>
)

const Container = styled.div`
  display: flex;
  margin: 50px 0;
  align-items: flex-end;
`

// const ButtonContainer = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
// `

const TaskCards = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-start;
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

const RevealAndDisapearBehaviour = ({ current, ...rest }) =>
  current ? <div {...rest} /> : null

const RevealAndDisapearFragment = props => (
  <Fragment {...props} behaviour={RevealAndDisapearBehaviour} />
)

const RefreshDraw = styled(BloodVesselIcon)`
  path {
    fill-opacity: 0;
    stroke: ${colors.red};
    stroke-width: 10;
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: ${draw} 5s 1;
  }
`
