import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { FragmentList, FragmentListItem } from '../blocks'

export const MicrotasksNodeSlide = props => (
  <Slide centered initialFragmentIndex={0} {...props}>
    <Figure>
      <FragmentList>
        <FragmentListItem>Promise.then</FragmentListItem>
        <FragmentListItem>process.nextTick</FragmentListItem>
        <FragmentListItem>
          Выполняются каждый раз <br />когда пустеет стек
        </FragmentListItem>
      </FragmentList>
      <figcaption>Микротаски в ноде</figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``
