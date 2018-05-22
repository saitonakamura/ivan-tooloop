import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { FragmentList, FragmentListItem, Caption, Strike } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const MicrotaskSourcesSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Figure>
      <FragmentList>
        <FragmentListItem>Promise.then</FragmentListItem>
        <FragmentListItem>Mutation observer</FragmentListItem>
        <FragmentListItem>
          <Strike>Object.observe</Strike>
        </FragmentListItem>
      </FragmentList>
      <Figcaption>Источники микротасок</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure`
  margin: 0;
  padding: 0;
`

const Figcaption = Caption.withComponent('figcaption')
