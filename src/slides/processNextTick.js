import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { ItCode } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

const code = `const createServer = () => {
  const evEmitter = new EventEmitter()
  return {
    listen: port => {
      evEmitter.post('listening', port)
      return evEmitter
    }
  }
}

const server = createServer().listen(8080)

server.on('listening', () => console.log('listening')`

export const ProcessNextTickSlide = props => (
  <Slide centered background={slideBackImg} initialFragmentIndex={0} {...props}>
    <Figure>
      <ItCode margined>{code}</ItCode>
      <figcaption>process.nextTick</figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``
