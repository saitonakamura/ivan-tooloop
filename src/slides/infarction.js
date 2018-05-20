import React from 'react'
import { Slide } from '@saitonakamura/presa'
import ColorHeartIcon from '../assets/svgReact/Heart'
import styled from 'styled-components'
import { FragmentList, FragmentListItem } from '../blocks'
import { colors } from '../colors'

export const InfractionSlide = props => (
  <Slide centered {...props}>
    <Cols>
      <LeftCol>
        <FragmentList>
          <FragmentListItem>Чаще всего утром в понедельник</FragmentListItem>
          <FragmentListItem>
            У одиноких людей риск в два раз выше
          </FragmentListItem>
          <FragmentListItem>
            Десять дирижеров погибли от инфаркта
          </FragmentListItem>
          <FragmentListItem>
            Некроз сердечной мышцы вызванный недостатом крови
          </FragmentListItem>
        </FragmentList>
      </LeftCol>
      <RightCol>
        <ColorHeartIcon color={colors.red} size={200} />
      </RightCol>
    </Cols>
    <Caption>Инфаркт</Caption>
  </Slide>
)

const Cols = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

const LeftCol = styled.div`
  flex-basis: 70%;
`

const RightCol = styled.div``

const Caption = styled.div`
  margin-top: 50px;
`
