import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { Caption, Button, ItCode } from '../blocks'
import HeartIcon from '../assets/svgReact/Heart'
import { colors } from '../colors'
import { heartbeat } from '../blocks/animations'
import slideBackImg from '../assets/images/slide-back.png'

const code = `function starveMicrotasks() {
  return Promise.resolve().then(starveMicrotasks)
}`

const stopFirstHeart = () => {
  const heartIcon = document.querySelector('#heartIconToStop')
  heartIcon.style['animation-iteration-count'] = 0
}

export const MicrotaskStarveSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Container>
      <ItCode>{code}</ItCode>
      <ColorHeartIcon size={150} id="heartIconToStop" />
      <ColorHeartIcon size={150} style={{ animationDelay: '0.2s' }} />
    </Container>
    <Caption>
      <Button onClick={stopFirstHeart}>Истощить Event Loop</Button>
    </Caption>
  </Slide>
)

const Container = styled.div``

const ColorHeartIcon = styled(HeartIcon)`
  color: ${colors.red};
  animation: ${heartbeat} 2s infinite;
`
