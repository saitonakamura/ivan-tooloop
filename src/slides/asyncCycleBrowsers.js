import React from 'react'
import { Slide } from '@saitonakamura/presa'
// import styled from 'styled-components'
import { ItCode, Caption } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

const code = `const bigArray = [1..1_000_000]
const chunkSize = 10 * 1000
const chunksCount = Math.floor(bigArray.length / chunkSize) + 1
const parseData = (slice) => // parse binary data

for (let i = 0; i < chunksCount; i++) {
  const slice = bigArray.slice(
    i * chunkSize,
    Math.min((i + 1) * chunkSize, bigArray.length)
  )

  setTimeout(() => parseData(slice), 0)
}`

export const AsynCycleBrowsersSlide = props => (
  <Slide background={slideBackImg} {...props}>
    <ItCode>{code}</ItCode>
    <Caption>Разбиение массива на чанки и их асинхронная обработка</Caption>
  </Slide>
)
