import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import styled, { css } from 'styled-components'
import { Transition } from 'react-spring'
import SantaClausIcon from '../assets/svgReact/SantaClaus'
import { ItCode, Paper } from '../blocks'

const stackSource = {
  addAndMultiply: 'addAndMultiply(2, 5, 3)',
  multiply: 'multiply(add(n1, n2), n3)',
  add: 'add(n1, n2)',
  plus: 'n1 + n2',
  mult: 'n1 * n2',
}

const code = {
  KEY_D: 'KeyD',
  KEY_A: 'KeyA',
}

export class StackSlide extends React.Component {
  startIndex = 0
  endIndex = 15
  state = { index: 0 }

  handleKeyDown = e => {
    if (e.code === code.KEY_D) this.navigateForward()
    if (e.code === code.KEY_A) this.navigateBackwards()
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
    document.body.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.handleKeyDown)
  }

  render() {
    const { index } = this.state
    const cardsToshow = cards.filter(card => card.visible(index))
    const stackToShow = stack.filter(item => item.visible(index))

    const cardsAnimated = (
      <Transition
        keys={cardsToshow.map(item => item.key)}
        from={{ opacity: 0, height: 0, left: '70%' }}
        enter={{ opacity: 1, height: 400, left: '50%' }}
        leave={{ opacity: 0, height: 0, left: '30%' }}
      >
        {cardsToshow.map(item => styles => (
          <Card style={styles}>{item.children}</Card>
        ))}
      </Transition>
    )

    const stackAnimated = (
      <Transition
        keys={stackToShow.map(item => item.key)}
        from={{ height: 0, opacity: 0 }}
        enter={{ height: 100, opacity: 1 }}
        leave={{ height: 0, opacity: 0 }}
      >
        {stackToShow.map(item => styles => (
          <StackItem style={styles}>{item.children}</StackItem>
        ))}
      </Transition>
    )

    return (
      <Slide {...this.props}>
        {cardsAnimated}
        <Cont>
          <Cards>{stackAnimated}</Cards>
          <ItCode>{`
const add = (n1, n2) => n1 + n2

const multiply = (n1, n2) => n1 * n2

const addAndMultiply = (n1, n2, n3) =>
  multiply(
    add(n1, n2),
    n3
  )

addAndMultiply(2, 5, 3)
        `}</ItCode>
        </Cont>
      </Slide>
    )
  }
}

const Cont = styled.div`
  display: flex;
  flex-direction: row;
`

const Cards = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  padding-right: 50px;
  * + * {
    margin-top: 10px;
  }
`

const Card = Paper.extend`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 400px;
  height: 450px;
`

const StackItem = Paper.extend`
  height: 0;
`

const CardBehavior = styled(Card)`
  transition: all 0.2s ease-in;
  opacity: ${props => (props.current ? 1 : 0)};
  ${props => {
    if (!props.current && !props.active)
      return css`
        transform: translateX(-50%) translateY(-50%) scale(0);
      `
    if (props.current && props.active)
      return css`
        transform: translateX(-50%) translateY(-50%) scale(1);
      `
    if (!props.current && props.active)
      return css`
        transform: translateX(-50%) translateY(-50%) scale(1);
      `
  }};
`

const cards = [
  {
    visible: i => i === 1,
    children: <ItCode>{stackSource.addAndMultiply}</ItCode>,
    key: stackSource.addAndMultiply,
  },
  {
    visible: i => i === 3,
    children: <ItCode>{stackSource.multiply}</ItCode>,
    key: stackSource.multiply,
  },
  {
    visible: i => i === 5,
    children: <ItCode>{stackSource.add}</ItCode>,
    key: stackSource.add,
  },
  {
    visible: i => i === 7,
    children: <ItCode>{stackSource.plus}</ItCode>,
    key: stackSource.plus,
  },
  {
    visible: i => i === 11,
    children: <ItCode>{stackSource.mult}</ItCode>,
    key: stackSource.mult,
  },
]

const stack = [
  {
    visible: i => i >= 12 && i <= 12,
    children: <ItCode>{stackSource.mult}</ItCode>,
    key: stackSource.mult,
  },
  {
    visible: i => i >= 8 && i <= 8,
    children: <ItCode>{stackSource.plus}</ItCode>,
    key: stackSource.plus,
  },
  {
    visible: i => i >= 6 && i <= 9,
    children: <ItCode>{stackSource.add}</ItCode>,
    key: stackSource.add,
  },
  {
    visible: i => i >= 4 && i <= 13,
    children: <ItCode>{stackSource.multiply}</ItCode>,
    key: stackSource.multiply,
  },
  {
    visible: i => i >= 2 && i <= 14,
    children: <ItCode>{stackSource.addAndMultiply}</ItCode>,
    key: stackSource.addAndMultiply,
  },
]
