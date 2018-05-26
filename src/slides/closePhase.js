import React from 'react'
import { Slide } from '@saitonakamura/presa'
// import styled from 'styled-components'
import { ItH1, FragmentList, FragmentListItem, ItCode } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

/* eslint-disable react/no-unescaped-entities */
export const ClosePhaseSlide = props => (
  <Slide background={slideBackImg} {...props}>
    <ItH1 margin="50px" bordered>
      Фаза close callbacks
    </ItH1>
    <FragmentList>
      <FragmentListItem>
        Колбеки закрытия сокетов и прочего типа
        <br />
        <Code>socket.on('close', …)</Code>
      </FragmentListItem>
      <FragmentListItem>
        Выполнятся в этой фазе только в случае неожиданного события
      </FragmentListItem>
    </FragmentList>
  </Slide>
)

const Code = ItCode.extend`
  font-size: 1em;
  margin-top: 20px;
`
