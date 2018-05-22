import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import slideBackImg from '../assets/images/slide-back.png'
import { Caption, FragmentList, FragmentListItem } from '../blocks'

export const TasksSummaryNodeSlide = props => (
  <Slide background={slideBackImg} centered {...props}>
    <Figure>
      <FragmentList>
        <FragmentListItem>Распределено по фазам</FragmentListItem>
        <FragmentListItem>Есть защита от слишком долгих фаз</FragmentListItem>
      </FragmentList>
      <Figcaption>Итоги по фазам ноды</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``

const Figcaption = Caption.withComponent('figcaption')
