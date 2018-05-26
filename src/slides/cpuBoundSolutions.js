import React from 'react'
import { Slide } from '@saitonakamura/presa'
// import styled from 'styled-components'
import { FragmentList, FragmentListItem, Caption } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const CpuBoundSolutionsSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <FragmentList>
      <FragmentListItem>Изменение DOM : requestAnimationFrame</FragmentListItem>
      <FragmentListItem>
        Неприоритетная и недолгая : requestIdleCallback
      </FragmentListItem>
      <FragmentListItem>Долгое и тяжелое : WebWorkers</FragmentListItem>
    </FragmentList>
    <Caption>Способы решения долгой cpu-bound операции</Caption>
  </Slide>
)
