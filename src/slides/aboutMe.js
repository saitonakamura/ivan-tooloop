import React from 'react'
import { Slide } from '@saitonakamura/presa'
import { Activity } from 'react-feather'
import styled from 'styled-components'
import { ItH1, ItH3 } from '../blocks'
import { colors } from '../colors'
import jslogo from '../assets/images/js-logo.png'
import dotnetlogo from '../assets/images/dotnet-logo.png'
import slideBackImg from '../assets/images/slide-back.png'

export const AboutMeSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <ItH1 bordered>Михаил Башуров</ItH1>
    <ItH3>Фулстак на JS / .NET</ItH3>
    <p>Люблю красивый UI, зеленые тесты.</p>
    <LinkOfJsDotnet />
  </Slide>
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
