import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { Caption, FragmentList, FragmentListItem } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const TasksSummarySlide = props => (
  <Slide background={slideBackImg} centered {...props}>
    <Figure>
      <FragmentList>
        <FragmentListItem>Дробить на маленькие задачи</FragmentListItem>
        <FragmentListItem>Много типов задач</FragmentListItem>
        <FragmentListItem>Приоретизация через очереди</FragmentListItem>
        <FragmentListItem>Многое решается браузерами</FragmentListItem>
        <FragmentListItem>Спецификация соблюдается не всегда</FragmentListItem>
      </FragmentList>
      <Figcaption>Итоги по таскам в браузерах</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``

const Figcaption = Caption.withComponent('figcaption')
