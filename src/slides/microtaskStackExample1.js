import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import styled from 'styled-components'
import { ItCode, RenderWhenActiveFragment } from '../blocks'
import fusrodahImg from '../assets/images/fus-ro-dah.jpg'
import Button from '../blocks/button'
import { colors } from '../colors'

const code = `const container = document.querySelector('#grayContainerOne')
const button = document.querySelector('#buttonOne')

button.addEventListener('click', () => {
  Promise.resolve()
    .then(() => console.log('RO'))

  console.log('FUS')
})

container.addEventListener('click', () => {
  console.log('DAH!')
})`

window.outputOne = []

export class MicrotaskStackExample1Slide extends React.Component {
  handleClick = () => {
    setTimeout(() => this.forceUpdate(), 100)
  }

  componentDidMount() {
    eval(code.replace(/console\.log/g, 'window.outputOne.push'))
  }

  render() {
    return (
      <Slide centered {...this.props}>
        {/* <Figure> */}
        <Cols>
          <ItCode>{code}</ItCode>
          <Console
            value={window.outputOne.reduce(
              (acc, curr) => `${acc}\r\n${curr}`,
              '',
            )}
          />
        </Cols>
        {/* <Figcaption> */}
        <ButtonContainer id="grayContainerOne">
          <Button id="buttonOne" onClick={this.handleClick}>
            👏 Button one
          </Button>
        </ButtonContainer>
        {/* </Figcaption> */}
        {/* </Figure> */}
        <RenderWhenActiveFragment>
          <Img src={fusrodahImg} />
        </RenderWhenActiveFragment>
      </Slide>
    )
  }
}

const Cols = styled.div`
  display: flex;
`

const Console = styled.textarea`
  border: 3px solid ${colors.purpleLight};
  width: 230px;
  font-size: 2rem;
  border-radius: 6px;
  margin-left: 50px;
`

const Figure = styled.figure`
  margin: 0;
  padding: 0;
`

const ButtonContainer = styled.div`
  border: 2px solid ${colors.purpleDarker};
  background-color: lightgray;
  padding: 9px;
  border-radius: 6px;
`

const Figcaption = styled.figcaption``

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
