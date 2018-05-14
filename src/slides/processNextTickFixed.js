import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { ItCode } from '../blocks'

const code = `const createServer = () => {
  const evEmitter = new EventEmitter()
  return {
    listen: port => {
      process.nextTick(() => evEmitter.post('listening', port))
      return evEmitter
    }
  }
}

const server = createServer().listen(8080)

server.on('listening', () => console.log('listening')`

export const ProcessNextTickFixedSlide = props => (
  <Slide centered initialFragmentIndex={0} {...props}>
    <Figure>
      <ItCode margined>{code}</ItCode>
      <figcaption>process.nextTick: корректное использование</figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``
