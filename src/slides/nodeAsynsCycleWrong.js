import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
// import styled from 'styled-components'
import { ItCode, Caption } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

const code = `const bigArray = [1..1_000_000]
const chunks = getChunks(bigArray)

const parseData = (slice) => // parse binary data

for (chunk of chunks) {
  setTimeout(() => parseData(slice), 0)
}`

export const NodeAsyncCycleWrongSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Code>{code}</Code>
    <Fragment>
      <SetImmediateCode>setImmediate(() => parseData(slice))</SetImmediateCode>
    </Fragment>
    <Caption>Неверная асинхронная обработка чанков в Node.js</Caption>
  </Slide>
)

const Code = ItCode.extend`
  font-size: 1.2em;
`

const SetImmediateCode = Code.extend`
  position: absolute;
  top: 55.4%;
  left: 19.3%;
  background-color: white;
  padding-right: 14px;
`
