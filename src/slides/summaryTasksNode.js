import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import slideBackImg from '../assets/images/slide-back.png'
import { Caption, FragmentList, FragmentListItem } from '../blocks'

export const TasksSummaryNodeSlide = props => (
  <Slide background={slideBackImg} centered {...props}>
    <Figure>
      <FragmentList>
        <FragmentListItem listStyleType="🎉">
          Распределено по фазам
        </FragmentListItem>
        <FragmentListItem listStyleType="🎉">
          Защита от слишком долгой poll-фазы
        </FragmentListItem>
        <FragmentListItem listStyleType="🎉">
          Нет защиты в других фазах
        </FragmentListItem>
        <FragmentListItem listStyleType="🎉">
          Рекурсивная обработка
        </FragmentListItem>
        <FragmentListItem listStyleType="🎉">
          лучше process fork / thread pool
        </FragmentListItem>
        <FragmentListItem listStyleType="🎉">
          setImmediate в poll - круто
        </FragmentListItem>
      </FragmentList>
      <Figcaption>Итоги по фазам ноды</Figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure``

const Figcaption = Caption.withComponent('figcaption')
