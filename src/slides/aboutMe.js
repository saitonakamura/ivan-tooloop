import React from 'react'
import { Slide } from '@saitonakamura/presa'
import HeartbeatIcon from '../assets/svgReact/Heartbeat'
import styled from 'styled-components'
import { ItH1 } from '../blocks'
import { colors } from '../colors'
import jslogo from '../assets/images/js-logo.png'
import dotnetlogo from '../assets/images/dotnet-logo.png'
import slideBackImg from '../assets/images/slide-back.png'

export const AboutMeSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <ItH1 bordered margin="20px">
      Михаил Башуров
    </ItH1>
    <P>Фулстак на JS / .NET</P>
    <P style={{ marginBottom: '50px' }}>
      Люблю красивый UI, зеленые тесты, транспиляцию, компиляцию и dev
      experience.
    </P>
    <LinkOfJsDotnet />
  </Slide>
)

const P = styled.p`
  font-size: 30px;
  margin: 8px 0;
`

const LinkOfJsDotnet = props => (
  <LinkOfJsDotnetCont {...props}>
    <img src={jslogo} width="25%" />
    <HeartbeatIcon size="20%" color={colors.red} />
    <img src={dotnetlogo} width="25%" />
  </LinkOfJsDotnetCont>
)

const LinkOfJsDotnetCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`
