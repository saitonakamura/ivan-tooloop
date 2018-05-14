import React from 'react'
import { Slide, Fragment } from '@saitonakamura/presa'
import styled from 'styled-components'
import { ItCode, RenderWhenActiveFragment, visuallyHidden } from '../blocks'
import fusroderpImg from '../assets/images/fus-ro-derp.jpg'
import Button from '../blocks/button'
import { colors } from '../colors'

const code = `const container = document.querySelector('#grayContainerTwo')
const button = document.querySelector('#buttonTwo')

button.addEventListener('click', () => {
  Promise.resolve()
    .then(() => console.log('RO'))

  console.log('FUS')
})

container.addEventListener('click', () => {
  console.log('DAH!')
})

button.click()`

window.outputOne = []

export class MicrotaskStackExampleSyncSlide extends React.Component {
  handleClick = () => {
    const button = document.querySelector('#buttonTwo')
    button.click()
    setTimeout(() => this.forceUpdate(), 100)
  }

  componentDidMount() {
    eval(
      code
        .replace(/button\.click\(\)/g, '')
        .replace(/console\.log/g, 'window.outputOne.push'),
    )
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
        <Hidden>
          <ButtonContainer id="grayContainerTwo">
            <Button id="buttonTwo" onClick={this.handleClick}>
              👏 Запустить!
            </Button>
          </ButtonContainer>
        </Hidden>
        <Button onClick={this.handleClick}>👏 Запустить!</Button>
        {/* </Figcaption> */}
        {/* </Figure> */}
        <RenderWhenActiveFragment>
          <Img src={fusroderpImg} />
        </RenderWhenActiveFragment>
      </Slide>
    )
  }
}

const Hidden = styled.div`
  ${visuallyHidden};
`

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
