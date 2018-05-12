import React from 'react'
import { Slide } from '@saitonakamura/presa'
// import styled from 'styled-components'
import { ItH1, FragmentList, FragmentListItem } from '../blocks'

export const PollPhaseSlide = props => (
  <Slide {...props}>
    <ItH1 margin="50px" bordered>
      Фаза poll
    </ItH1>
    <FragmentList>
      <FragmentListItem>
        Ждем событий от I/O и кладем их в poll queue
      </FragmentListItem>
      <FragmentListItem>
        Если нет таймеров и setImmediate то просто ждет новых событий
      </FragmentListItem>
      <FragmentListItem>
        Сам умеет класть таймеры в очередь выполнения
      </FragmentListItem>
    </FragmentList>
  </Slide>
)
