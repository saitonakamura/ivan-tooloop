import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
// import styled from 'styled-components'
import { ItCode, Caption } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

const code = `const parseData = (slice) => // parse binary data

const recursiveAsyncParseData = (i) => {
  parseData(getChunk(i))
  setImmediate(() => recursiveAsyncParseData(i + 1))
} 

recursiveAsyncParseData(0)`

export const NodeAsyncCycleRightSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Code>{code}</Code>
    <Caption>Рекурсивная асинхронная обработка чанков в Node.js</Caption>
  </Slide>
)

const Code = ItCode.extend`
  font-size: 1.2em;
`
