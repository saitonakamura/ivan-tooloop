import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { Caption, FragmentList, FragmentListItem } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const TasksSummarySlide = props => (
  <Slide background={slideBackImg} centered {...props}>
    <Figure>
      <FragmentList>
        <FragmentListItem listStyleType="🎉">
          Дробить на маленькие задачи
        </FragmentListItem>
        <FragmentListItem listStyleType="🎉">
          Много типов задач
        </FragmentListItem>
        <FragmentListItem listStyleType="🎉">
          Приоритизация через очереди
        </FragmentListItem>
        <FragmentListItem listStyleType="🎉">
          Многое решается браузерами
        </FragmentListItem>
        <FragmentListItem listStyleType="🎉">
          Спецификация соблюдается не всегда
        </FragmentListItem>
      </FragmentList>
      <Figcaption>Итоги по таскам в браузерах</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``

const Figcaption = Caption.withComponent('figcaption')
