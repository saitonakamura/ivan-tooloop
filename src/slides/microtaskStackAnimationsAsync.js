import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import slideBackImg from '../assets/images/slide-back.png'
import { ItCode, Paper, Caption, Button, ItH4, Divider } from '../blocks'
import { Transition } from 'react-spring'

const Code = ItCode.extend``

const keys = {
  KEY_D: 'KeyD',
  KEY_A: 'KeyA',
}

const code = `button.addEventListener('click', () => {
  Promise.resolve()
    .then(() => console.log('RO'))

  console.log('FUS')
})

container.addEventListener('click', () => {
  console.log('DAH!')
})`

/* eslint-disable quotes */
const codelines = {
  buttonHandler: 'buttonHandleClick',
  divHandler: 'divHandleClick',
  promise: 'Promise.resolve()...',
  fus: "console.log('FUS')",
  ro: "console.log('RO')",
  dah: "console.log('DAH!')",
}
/* eslint-enable quotes */

const HighlightLine = Code.extend`
  position: absolute;
  background-color: white;
  font-weight: bold;
  top: ${p => p.top};
  left: ${p => p.left || '0%'};
`

const activelines = index => {
  const lines = code.replace(/\r/g, '').split('\n')

  if (index === 1) {
    return <HighlightLine top="15.5%">{lines[0]}</HighlightLine>
  }

  if (index === 2) {
    return <HighlightLine top="22%">{lines[1]}</HighlightLine>
  }

  if (index === 5) {
    return <HighlightLine top="43%">{lines[4]}</HighlightLine>
  }

  if (index === 8) {
    return <HighlightLine top="29%">{lines[2]}</HighlightLine>
  }

  if (index === 10) {
    return <HighlightLine top="64%">{lines[7]}</HighlightLine>
  }

  if (index === 11) {
    return <HighlightLine top="70%">{lines[8]}</HighlightLine>
  }

  return null
}

const microtasks = [
  {
    key: codelines.ro,
    children: <Code>{codelines.ro}</Code>,
    visible: i => i >= 3 && i <= 7,
  },
]

const stack = [
  {
    key: codelines.dah,
    children: <Code>{codelines.dah}</Code>,
    visible: i => i === 11,
  },
  {
    key: codelines.divHandler,
    children: <Code>{codelines.divHandler}</Code>,
    visible: i => i >= 10 && i <= 12,
  },
  {
    key: codelines.ro,
    children: <Code>{codelines.ro}</Code>,
    visible: i => i === 8,
  },
  {
    key: codelines.fus,
    children: <Code>{codelines.fus}</Code>,
    visible: i => i === 5,
  },
  {
    key: codelines.promise,
    children: <Code>{codelines.promise}</Code>,
    visible: i => i >= 2 && i <= 3,
  },
  {
    key: codelines.buttonHandler,
    children: <Code>{codelines.buttonHandler}</Code>,
    visible: i => i >= 1 && i <= 6,
  },
]

export class MicrotaskStackAnimationsAsyncSlide extends React.Component {
  startIndex = 0
  endIndex = 13
  state = { index: 0 }

  handleKeyUp = e => {
    if (e.code === keys.KEY_D) this.navigateForward()
    if (e.code === keys.KEY_A) this.navigateBackwards()
  }

  navigateForward = () => {
    this.setState(
      state =>
        state.index < this.endIndex
          ? {
              index: state.index + 1,
            }
          : null,
    )
  }

  navigateBackwards = () => {
    this.setState(
      state =>
        state.index > this.startIndex
          ? {
              index: state.index - 1,
            }
          : null,
    )
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp)
  }

  render() {
    const { index } = this.state

    const stackToShow = stack.filter(item => item.visible(index))
    const microtasksToShow = microtasks.filter(item => item.visible(index))

    const stackAnimated = (
      <Transition
        keys={stackToShow.map(item => item.key)}
        from={{ height: 0, opacity: 0 }}
        enter={{ height: 70, opacity: 1 }}
        leave={{ height: 0, opacity: 0 }}
      >
        {stackToShow.map(item => styles => (
          <StackItem style={styles}>{item.children}</StackItem>
        ))}
      </Transition>
    )

    const microtasksAnimated = (
      <Transition
        keys={microtasksToShow.map(item => item.key)}
        from={{ height: 0, opacity: 0 }}
        enter={{ height: 70, opacity: 1 }}
        leave={{ height: 0, opacity: 0 }}
      >
        {microtasksToShow.map(item => styles => (
          <StackItem style={styles}>{item.children}</StackItem>
        ))}
      </Transition>
    )

    return (
      <Slide background={slideBackImg} {...this.props}>
        <Cont>
          <LeftSide>
            {activelines(index)}
            <Code>{code}</Code>
          </LeftSide>
          <RightSide>
            <ItH4>Очередь микротасок</ItH4>
            <MicrotasksQueue>{microtasksAnimated}</MicrotasksQueue>
            <Divider />
            <ItH4>Стек</ItH4>
            <Stack>{stackAnimated}</Stack>
          </RightSide>
        </Cont>
        <DetachedCaption>
          <Button onClick={this.navigateBackwards}>👈 Предыдущий шаг</Button>
          <Button onClick={this.navigateForward}>Следующий шаг 👉</Button>
        </DetachedCaption>
      </Slide>
    )
  }
}

const DetachedCaption = Caption.extend`
  position: absolute;
  bottom: 2%;
  left: 25%;
`

const Cont = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
`

const LeftSide = styled.div`
  flex-basis: 40%;
  transform: translateX(-50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
`

const MicrotasksQueue = styled.div`
  flex-basis: 34%;
`

const Stack = styled.div`
  flex-basis: 64%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const StackItem = Paper.extend`
  padding: 10px;
  height: 0;
  margin-top: 3px;
`
