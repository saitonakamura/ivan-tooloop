import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import styled from 'styled-components'
import CurvedArrowIcon from '../assets/svgReact/CurvedArrow'
import { Paper } from '../blocks'
// import { colors } from '../colors'
import slideBackImg from '../assets/images/slide-back.png'

export const EventLoopWhatwgSlide = props => (
  <Slide centered background={slideBackImg} initialFragmentIndex={0} {...props}>
    <Figure>
      <Cols>
        <Rows>
          <Cell>
            <Fragment index={4}>
              <CurvedArrowIcon
                size={100}
                style={{ transform: 'rotate(400deg)' }}
              />
            </Fragment>
          </Cell>
          <Cell>
            <Fragment index={0}>
              <Paper>Выбрать свободную таску</Paper>
            </Fragment>
          </Cell>
          <Cell>
            <Fragment index={1}>
              <CurvedArrowIcon
                size={100}
                style={{ transform: 'rotate(100deg)' }}
              />
            </Fragment>
          </Cell>
        </Rows>
        <Rows>
          <Cell>
            <Fragment index={3}>
              <Paper>Обновить рендеринг (если необходимо)</Paper>
            </Fragment>
          </Cell>
          <Cell />
          <Cell>
            <Fragment index={1}>
              <Paper>Выполнить её</Paper>
            </Fragment>
          </Cell>
        </Rows>
        <Rows>
          <Cell>
            <Fragment index={3}>
              <CurvedArrowIcon
                size={100}
                style={{ transform: 'rotate(300deg)' }}
              />
            </Fragment>
          </Cell>
          <Cell>
            <Fragment index={2}>
              <Paper>Выполнить microtask checkpoint</Paper>
            </Fragment>
          </Cell>
          <Cell>
            <Fragment index={2}>
              <CurvedArrowIcon
                size={100}
                style={{ transform: 'rotate(200deg)' }}
              />
            </Fragment>
          </Cell>
        </Rows>
      </Cols>
      <figcaption>Алгоритм работы Event Loop по стандарту whatwg</figcaption>
    </Figure>
  </Slide>
)

const Figure = styled.figure`
  width: 100%;
  height: 90%;
  margin-bottom: 80px;
`

const Cols = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

const Rows = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const Cell = styled.div`
  flex: 0 0 33%;
`
