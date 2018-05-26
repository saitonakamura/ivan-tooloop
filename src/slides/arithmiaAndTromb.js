import React from 'react'
import { Slide } from '@saitonakamura/presa'
import HeartIcon from '../assets/svgReact/Heart'
import styled from 'styled-components'
import { Caption, Button } from '../blocks'
import { colors } from '../colors'
import { heartbeat } from '../blocks/animations'
import slideBackImg from '../assets/images/slide-back.png'

export const ArithmiaAndTrombSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Container>
      <ColorHeartIcon size={300} id="heartToStopSystemic" />
    </Container>
    <Caption>
      <Button
        onClick={() => {
          const heartEl = document.querySelector('#heartToStopSystemic')
          heartEl.style['animation-iteration-count'] = 0
          let isArithmia = true
          window.arithmiaInterval = setInterval(
            () =>
              (heartEl.style[
                'animation-iteration-count'
              ] = (isArithmia = !isArithmia) ? 0 : 'infinite'),
            1 * 1000,
          )
        }}
      >
        💘 Аритмия
      </Button>
      <Button
        onClick={() => {
          clearInterval(window.arithmiaInterval)
          const heartEl = document.querySelector('#heartToStopSystemic')
          heartEl.style['animation-iteration-count'] = 0
        }}
      >
        💔 Тромб
      </Button>
    </Caption>
  </Slide>
)

const Container = styled.div`
  display: flex;
  height: 70%;
`

const ColorHeartIcon = styled(HeartIcon)`
  color: ${colors.red};
  animation: ${heartbeat} 5s infinite;
`
