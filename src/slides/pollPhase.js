import React from 'react'
import { Slide } from '@saitonakamura/presa'
// import styled from 'styled-components'
import { ItH1, FragmentList, FragmentListItem } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const PollPhaseSlide = props => (
  <Slide background={slideBackImg} {...props}>
    <ItH1 margin="50px" bordered>
      Фаза poll
    </ItH1>
    <FragmentList>
      <FragmentListItem>Исполняет I/O колбеки</FragmentListItem>
      <FragmentListItem>Круто делать setImmediate</FragmentListItem>
      <FragmentListItem>
        Нет таймеров и setImmediate: ждем событий от I/O
      </FragmentListItem>
      <FragmentListItem>
        Лимит по кол-ву колбеков за раз (pending callbacks)
      </FragmentListItem>
    </FragmentList>
  </Slide>
)
