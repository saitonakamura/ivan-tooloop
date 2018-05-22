import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { FragmentList, FragmentListItem, Caption } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const MicrotasksNodeSummarySlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Figure>
      <FragmentList>
        <FragmentListItem>
          Надо заботиться о бесконечных вызовах
        </FragmentListItem>
        <FragmentListItem>
          process.nextTick для вызова колбэков
        </FragmentListItem>
      </FragmentList>
      <Figcaption>Итоги по микротаскам в ноде</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``

const Figcaption = Caption.withComponent('figcaption')
