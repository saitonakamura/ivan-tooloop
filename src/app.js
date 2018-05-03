import React from 'react'
import { Presentation, Slide } from 'presa'
import { RefreshCw } from 'react-feather'
import { Activity } from 'react-feather'
import styled, { css, keyframes } from 'styled-components'
import { ItTitle, ItH1, ItH3 } from './blocks'
import { colors } from './colors'
import jslogo from './assets/images/js-logo.png'
import dotnetlogo from './assets/images/dotnet-logo.png'
import { DevIvanSlide } from './slides'

// No need to pass indexes here
export const App = () => (
  <Presentation>
    <Slide
      name="Иван Тулуп: асинхронщина в JS"
      background={<StyledRefreshCw size={500} color={colors.purple} />}
      centered
    >
      <ItTitle>Иван Тулуп: асинхронщина в JS</ItTitle>
    </Slide>
    <Slide name="Обо мне" centered>
      <ItH1 bordered>Михаил Башуров</ItH1>
      <ItH3>Фулстак на JS / .NET</ItH3>
      <p>Люблю красивый UI, зеленые тесты.</p>
      <LinkOfJsDotnet />
    </Slide>
    <DevIvanSlide />
  </Presentation>
)

const LinkOfJsDotnet = props => (
  <LinkOfJsDotnetCont {...props}>
    <img src={jslogo} width="40%" />
    <Activity size="20%" color={colors.purple} />
    <img src={dotnetlogo} width="40%" />
  </LinkOfJsDotnetCont>
)

const LinkOfJsDotnetCont = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
`

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
