import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import slideBackImg from '../assets/images/slide-back.png'
import { Paper, Button } from '../blocks'
import { colors } from '../colors'
import { lighten } from 'polished'

export const MicrotasksModalExampleSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Figure>
      <Modal>
        <ContLogo>
          <ContFirstText>
            <Textline />
            <Textline />
            <Textline />
          </ContFirstText>
          <Logo />
        </ContLogo>
        <Textline />
        <Textline />
        <Textline />
        <Buttons>
          <Button>Подтвердить</Button>
          <Button>Отменить</Button>
        </Buttons>
      </Modal>
    </Figure>
  </Slide>
)

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Figure = styled.div``

const Modal = Paper.extend`
  flex-direction: column;
  width: 500px;
  padding: 30px 50px;
`

const ContLogo = styled.div`
  width: 100%;
  display: flex;
`

const ContFirstText = styled.div`
  width: 70%;
`

const Logo = styled.div`
  background-color: ${lighten(0.3, colors.green)};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-left: 30px;
`

const Textline = styled.div`
  height: 20px;
  width: 100%;
  margin-bottom: 30px;
  background-color: lightgray;
`
