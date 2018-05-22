import React from 'react'
import { Slide } from '@saitonakamura/presa'
import slideBackImg from '../assets/images/slide-back.png'
import CatIcon from '../assets/svgReact/Cat'
import QuestionIcon from '../assets/svgReact/Question'
import { colors } from '../colors'

export const QuestionsSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <QuestionIcon size={200} color={colors.purple} />
    <CatIcon size={200} color={colors.purple} />
  </Slide>
)
