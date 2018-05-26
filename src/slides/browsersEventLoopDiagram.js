import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import styled from 'styled-components'
// import { ItCode, Caption } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'
import { colors } from '../colors'

export const BrowsersEventLoopDiagramSlide = ({
  task,
  render,
  microtask,
  raf,
  // ric,
  ...rest
}) => (
  <Slide centered background={slideBackImg} {...rest}>
    <OvalCycle id="ovalCycle">
      <SomeTitle>Event Loop</SomeTitle>
      {showHideOrFragment(task, <Task />)}
      {showHideOrFragment(render, <Render />)}
      {showHideOrFragment(microtask, <Microtask />)}
      {showHideOrFragment(raf, <RAF title="requestAnimationFrame" />)}
      {/* {showHideOrFragment(ric, <RIC title="requestIdleCallback" />)} */}
    </OvalCycle>
  </Slide>
)

const showHideOrFragment = (show, element) => {
  if (show === true) return element
  if (show === false) return <Fragment>{element}</Fragment>
  return null
}

const SomeTitle = styled.h1`
  font-weight: lighter;
  font-size: 50px;
`

const OvalCycle = styled.div`
  width: 100%;
  height: 100%;
  border: 6px solid black;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Checkpoint = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border: 8px solid ${colors.purple};
  border-radius: 50%;
  background-color: white;

  &:after {
    font-size: 40px;
    position: absolute;
  }
`

const Task = Checkpoint.extend`
  left: -3.5%;
  top: 45%;
  width: 50px;
  height: 50px;
  border-color: ${colors.purple};

  &:after {
    content: 'Таск';
    left: 150%;
    top: -35%;
  }
`

const Microtask = Checkpoint.extend`
  left: 7%;
  top: 15%;
  width: 50px;
  height: 50px;
  border-color: ${colors.green};

  &:after {
    content: 'Микротаски';
    left: 150%;
    top: 15%;
  }
`

const Render = Checkpoint.extend`
  right: -3%;
  top: 45%;
  width: 50px;
  height: 50px;
  border-color: ${colors.red};

  &:after {
    content: 'Рендер ?';
    width: 170px;
    right: 150%;
    top: -35%;
  }
`

const RAF = Checkpoint.extend`
  right: 20%;
  top: 2.5%;
  width: 50px;
  height: 50px;
  border-color: ${colors.blue};

  &:after {
    content: 'rAF';
    right: 150%;
    top: 25%;
  }
`

// const RIC = Checkpoint.extend`
//   right: 5%;
//   top: 17%;
//   width: 50px;
//   height: 50px;
//   border-color: ${colors.pink};

//   &:after {
//     content: 'rIC';
//     left: 150%;
//     bottom: 80%;
//   }
// `
