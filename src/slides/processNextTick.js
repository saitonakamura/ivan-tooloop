import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import styled from 'styled-components'
import { ItCode } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

const code = `const createServer = () => {
  const evEmitter = new EventEmitter()
  return {
    listen: port => {
      evEmitter.emit('listening', port)
      return evEmitter
    }
  }
}

const server = createServer().listen(8080)

server.on('listening', () => console.log('listening'))`

export const ProcessNextTickSlide = props => (
  <Slide centered background={slideBackImg} initialFragmentIndex={0} {...props}>
    <Figure>
      <ItCode margined>{code}</ItCode>
      <Fragment>
        <BoldCode>evEmitter.emit('listening', port)</BoldCode>
      </Fragment>
      <Fragment>
        <BoldCode>
          process.nextTick(() => evEmitter.emit('listening', port))
        </BoldCode>
      </Fragment>
      <figcaption>process.nextTick</figcaption>
    </Figure>
  </Slide>
)

const BoldCode = ItCode.extend`
  font-weight: bold;
  background-color: white;
  position: absolute;
  top: 34.8%;
  left: 26.1%;
`

const Figure = styled.figure``
