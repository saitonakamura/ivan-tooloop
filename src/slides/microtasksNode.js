import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { FragmentList, FragmentListItem, Caption } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const MicrotasksNodeSlide = props => (
  <Slide centered background={slideBackImg} initialFragmentIndex={0} {...props}>
    <Figure>
      <FragmentList>
        <FragmentListItem>Promise.then</FragmentListItem>
        <FragmentListItem>process.nextTick</FragmentListItem>
        <FragmentListItem>
          Выполняются каждый раз,<br />когда пустеет стек
        </FragmentListItem>
      </FragmentList>
      <Figcaption>Микротаски в ноде</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``

const Figcaption = Caption.withComponent('figcaption')
