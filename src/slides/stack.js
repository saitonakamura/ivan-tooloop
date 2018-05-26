import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { Transition } from 'react-spring'
import { ItCode, Paper, Caption, Button } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

const stackSource = {
  handleClick: 'handleClick(e)',
  log: 'console.log(e)',
  showConfirm: 'showConfirm(message)',
  confirm: 'window.confirm(message)',
}

const code = {
  KEY_D: 'KeyD',
  KEY_A: 'KeyA',
}

export class StackSlide extends React.Component {
  startIndex = 0
  endIndex = 11
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

  componentDidUpdate() {
    if (this.state.index === 10) window.confirm('Вы уверены?')
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
        enter={{ opacity: 1, height: 300, left: '50%' }}
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
      <Slide background={slideBackImg} {...this.props}>
        {cardsAnimated}
        <Cont>
          <Cards>{stackAnimated}</Cards>
          <ItCode>{`
const showConfirm = (message) =>
  window.confirm(message)

const handleClick = (e) => {
  console.log(e)
  return showPopup('Вы уверены?')
}

handleClick(e)
        `}</ItCode>
        </Cont>
        <Caption>
          <Button onClick={this.navigateBackwards}>👈 Предыдущий шаг</Button>
          <Button onClick={this.navigateForward}>Следующий шаг 👉</Button>
        </Caption>
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
  top: 35%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 400px;
  height: 300px;
`

const StackItem = Paper.extend`
  height: 0;
`

// const CardBehavior = styled(Card)`
//   transition: all 0.2s ease-in;
//   opacity: ${props => (props.current ? 1 : 0)};
//   ${props => {
//     if (!props.current && !props.active)
//       return css`
//         transform: translateX(-50%) translateY(-50%) scale(0);
//       `
//     if (props.current && props.active)
//       return css`
//         transform: translateX(-50%) translateY(-50%) scale(1);
//       `
//     if (!props.current && props.active)
//       return css`
//         transform: translateX(-50%) translateY(-50%) scale(1);
//       `
//   }};
// `

const cards = [
  {
    visible: i => i === 1,
    children: <ItCode>{stackSource.handleClick}</ItCode>,
    key: stackSource.handleClick,
  },
  {
    visible: i => i === 3,
    children: <ItCode>{stackSource.log}</ItCode>,
    key: stackSource.log,
  },
  {
    visible: i => i === 6,
    children: <ItCode>{stackSource.showConfirm}</ItCode>,
    key: stackSource.showConfirm,
  },
  {
    visible: i => i === 8,
    children: <ItCode>{stackSource.confirm}</ItCode>,
    key: stackSource.confirm,
  },
]

const stack = [
  {
    visible: i => i >= 9 && i <= 9,
    children: <ItCode>{stackSource.confirm}</ItCode>,
    key: stackSource.confirm,
  },
  {
    visible: i => i >= 7 && i <= 10,
    children: <ItCode>{stackSource.showConfirm}</ItCode>,
    key: stackSource.showConfirm,
  },
  {
    visible: i => i >= 4 && i <= 4,
    children: <ItCode>{stackSource.log}</ItCode>,
    key: stackSource.log,
  },
  {
    visible: i => i >= 2 && i <= 11,
    children: <ItCode>{stackSource.handleClick}</ItCode>,
    key: stackSource.handleClick,
  },
]
