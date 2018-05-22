import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import slideBackImg from '../assets/images/slide-back.png'
import { Caption } from '../blocks'

export const MicrotasksModalExampleSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Figure>
      <Figcaption>Пример с модальным окном и его закрытием</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``

const Figcaption = Caption.withComponent('figcaption')
