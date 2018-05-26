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
})

button.click()`

/* eslint-disable quotes */
const codelines = {
  buttonHandler: 'buttonHandleClick',
  divHandler: 'divHandleClick',
  promise: 'Promise.resolve()...',
  fus: "console.log('FUS')",
  ro: "console.log('RO')",
  dah: "console.log('DAH!')",
  click: 'button.click()',
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
    return <HighlightLine top="84.5%">{lines[11]}</HighlightLine>
  }

  if (index === 2) {
    return <HighlightLine top="9%">{lines[0]}</HighlightLine>
  }

  if (index === 3) {
    return <HighlightLine top="15.5%">{lines[1]}</HighlightLine>
  }

  if (index === 6) {
    return <HighlightLine top="36.5%">{lines[4]}</HighlightLine>
  }

  if (index === 9) {
    return <HighlightLine top="57.5%">{lines[7]}</HighlightLine>
  }

  if (index === 10) {
    return <HighlightLine top="63.5%">{lines[8]}</HighlightLine>
  }

  if (index === 14) {
    return <HighlightLine top="22.5%">{lines[2]}</HighlightLine>
  }

  return null
}

const microtasks = [
  {
    key: codelines.ro,
    children: <Code>{codelines.ro}</Code>,
    visible: i => i >= 4 && i <= 13,
  },
]

const stack = [
  {
    key: codelines.ro,
    children: <Code>{codelines.ro}</Code>,
    visible: i => i === 14,
  },
  {
    key: codelines.dah,
    children: <Code>{codelines.dah}</Code>,
    visible: i => i === 10,
  },
  {
    key: codelines.divHandler,
    children: <Code>{codelines.divHandler}</Code>,
    visible: i => i >= 9 && i <= 11,
  },

  {
    key: codelines.fus,
    children: <Code>{codelines.fus}</Code>,
    visible: i => i === 6,
  },
  {
    key: codelines.promise,
    children: <Code>{codelines.promise}</Code>,
    visible: i => i >= 3 && i <= 4,
  },
  {
    key: codelines.buttonHandler,
    children: <Code>{codelines.buttonHandler}</Code>,
    visible: i => i >= 2 && i <= 7,
  },
  {
    key: codelines.click,
    children: <Code>{codelines.click}</Code>,
    visible: i => i >= 1 && i <= 12,
  },
]

export class MicrotaskStackAnimationsSyncSlide extends React.Component {
  startIndex = 0
  endIndex = 15
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
