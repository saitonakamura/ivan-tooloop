import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import slideBackImg from '../assets/images/slide-back.png'
import { FragmentList, FragmentListItem, Caption } from '../blocks'

export const MicrotasksSummarySlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Figure>
      <FragmentList>
        <FragmentListItem>Можно заблокировать event loop</FragmentListItem>
        <FragmentListItem>Каждый раз после таски</FragmentListItem>
        <FragmentListItem>Каждый раз когда пустеет стек</FragmentListItem>
      </FragmentList>
      <Figcaption>Итоги по микротаскам</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``

const Figcaption = Caption.withComponent('figcaption')
