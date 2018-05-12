import React from 'react'
import { Slide } from '@saitonakamura/presa'
// import styled from 'styled-components'
import { ItH1, FragmentList, FragmentListItem, ItCode } from '../blocks'

/* eslint-disable react/no-unescaped-entities */
export const ClosePhaseSlide = props => (
  <Slide {...props}>
    <ItH1 margin="50px" bordered>
      Фаза close callbacks
    </ItH1>
    <FragmentList>
      <FragmentListItem>
        Колбеки закрытия сокетов и прочего типа
        <br />
        <ItCode>socket.on('close', …)</ItCode>
      </FragmentListItem>
    </FragmentList>
  </Slide>
)
