import React from 'react'
import { Slide } from '@saitonakamura/presa'
import { RefreshCw } from 'react-feather'
import styled, { css, keyframes } from 'styled-components'
import { ItTitle } from '../blocks'
import { colors } from '../colors'

export const TitleSlide = props => (
  <Slide
    background={<StyledRefreshCw size={500} color={colors.purple} />}
    centered
    {...props}
  >
    <ItTitle>Иван Тулуп: асинхронщина в JS</ItTitle>
  </Slide>
)

const centered = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`

const StyledRefreshCw = styled(RefreshCw)`
  ${centered};
  animation: ${rotation} 2s cubic-bezier(0.3, -0.25, 0.5, 1.25) infinite;
  opacity: 0.3;
`
