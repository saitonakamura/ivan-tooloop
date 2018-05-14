import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { FragmentList, FragmentListItem } from '../blocks'

export const MicrotaskSourcesSlide = props => (
  <Slide centered {...props}>
    <Figure>
      <FragmentList>
        <FragmentListItem>Promise.then</FragmentListItem>
        <FragmentListItem>Mutation observer</FragmentListItem>
      </FragmentList>
      <Figcaption>Источники микротасок</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure`
  margin: 0;
  padding: 0;
`

const Figcaption = styled.figcaption``
