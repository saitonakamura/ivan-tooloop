import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { ItTitle, FragmentList, FragmentListItem, VertDivider } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const IOBoundCpuBoundSlide = props => (
  <Slide background={slideBackImg} {...props}>
    <Cols>
      <Col>
        <Title bordered>I/O bound</Title>
        <FragmentList>
          <FragmentListItem>Таймаут</FragmentListItem>
          <FragmentListItem>xhr / fetch</FragmentListItem>
          <FragmentListItem>Сеть (бд)</FragmentListItem>
          <FragmentListItem>Файл</FragmentListItem>
        </FragmentList>
      </Col>
      <VertDivider />
      <Col>
        <Title bordered>CPU bound</Title>
        <FragmentList>
          <FragmentListItem>for of / for (;;)</FragmentListItem>
          <FragmentListItem>JSON.parse</FragmentListItem>
          <FragmentListItem>Hash</FragmentListItem>
        </FragmentList>
      </Col>
    </Cols>
  </Slide>
)

const Title = ItTitle.extend`
  font-size: 70px;
  margin-bottom: 50px;
`

const Col = styled.div`
  ${'' /* padding: 0 80px; */};
`

const Cols = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 70%;
`
