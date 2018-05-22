import React from 'react'
import { Slide } from '@saitonakamura/presa'
import { RefreshCw } from 'react-feather'
import styled, { css, keyframes } from 'styled-components'
import { ItTitle } from '../blocks'
import { colors } from '../colors'
import titleBackImg from '../assets/images/title-back.png'

export const TitleSlide = props => (
  <Slide
    background={
      <TitleBack>
        <StyledRefreshCw size={300} color={colors.purple} />
      </TitleBack>
    }
    {...props}
  >
    <ItTitle style={{ fontSize: '2.5em' }}>
      Иван Тулуп: <br /> асинхронщина в JS <br /> под капотом
    </ItTitle>
    <Author>Михаил Башуров</Author>
  </Slide>
)

const Author = styled.div`
  margin-top: 20px;
  font-size: 1.5em;
  font-weight: 300;
  ${'' /* font-style: italic; */};
`

const TitleBack = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${titleBackImg});
  background-repeat: round;
  postition: relative;
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
  position: absolute;
  right: 5%;
  bottom: 9%;
  animation: ${rotation} 2s cubic-bezier(0.3, -0.25, 0.5, 1.25) infinite;
  opacity: 1;
`
