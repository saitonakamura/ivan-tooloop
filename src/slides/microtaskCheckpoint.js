import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { FragmentList, FragmentListItem } from '../blocks'

export const MicrotaskCheckpointSlide = props => (
  <Slide centered {...props}>
    <Figure>
      <FragmentList>
        <FragmentListItem>Выполняем все до конца</FragmentListItem>
        <FragmentListItem>Можно порождать новые микротаски</FragmentListItem>
        <FragmentListItem>
          Не только после исполнения таски, но и после очистки стека
        </FragmentListItem>
      </FragmentList>
      <Figcaption>Особенности работы microtask checkpoint</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure`
  margin: 0;
  padding: 0;
`

const Figcaption = styled.figcaption``
