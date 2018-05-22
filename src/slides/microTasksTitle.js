import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import styled from 'styled-components'
import MicroscopeIcon from '../assets/svgReact/MicroscopeTwo'
import { ItTitle } from '../blocks'
import { colors } from '../colors'
import slideBackImg from '../assets/images/slide-back.png'

/* eslint-disable react/no-unescaped-entities */
export const MicroTasksTitleSlide = props => (
  <Slide background={slideBackImg} centered {...props}>
    <Rows>
      <Fragment>
        <ItTitle>Микро</ItTitle>
      </Fragment>
      <MicroscopeIcon size={200} color={colors.purple} />
      <Fragment>
        <ItTitle>Таски</ItTitle>
      </Fragment>
    </Rows>
  </Slide>
)

const Rows = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`
