import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import slideBackImg from '../assets/images/slide-back.png'
import loupeImg from '../assets/images/loupe.png'
import intheloopImg from '../assets/images/intheloop.png'
import keynotenodeImg from '../assets/images/keynotenode.png'
import nodejsdocImg from '../assets/images/nodejsdoc.png'
import whatwgImg from '../assets/images/whatwg.png'
import { colors } from '../colors'

export const MaterialsSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <Grid>
      <Item
        url="https://www.youtube.com/watch?v=8aGhZQkoFbQ"
        thumb={loupeImg}
        header={
          <span>
            What the heck is the <br />event loop anyway?
          </span>
        }
        desc="Philip Roberts 🎤 JSConf EU 2014"
      />
      <Item
        url="https://youtu.be/PNa9OMajw9w"
        thumb={keynotenodeImg}
        header={
          <span>
            Everything You Need to Know <br />About Node.js Event Loop
          </span>
        }
        desc="Bert Belder"
      />
      <Item
        url="https://www.youtube.com/watch?v=cCOL7MC4Pl0"
        thumb={intheloopImg}
        header={
          <span>
            In The Loop<br />&nbsp;
          </span>
        }
        desc="Jake Archibald 🎤 JSConf.Asia 2018"
      />
      <Item
        url="https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/"
        thumb={nodejsdocImg}
        header={
          <span>
            The Node.js Event Loop,<br />Timers, and process.nextTick()
          </span>
        }
      />
      <Item
        url="https://html.spec.whatwg.org/multipage/webappapis.html#event-loop-processing-model"
        thumb={whatwgImg}
        header={
          <span>
            WHATWG Specification<br />event loop processing model
          </span>
        }
      />
      <Etc>...</Etc>
    </Grid>
  </Slide>
)

const Etc = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 70px;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 3%;
  left: 5%;
`

const Cont = styled.a`
  text-align: left;
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const Thumb = styled.img`
  width: 300px;
  border-radius: 8px;
  margin-bottom: 5px;
  border: 5px solid transparent;

  ${Cont}:hover & {
    border-color: ${colors.purple};
  }
`

const Header = styled.h3`
  font-weight: 500;
  margin: 0;
  margin-bottom: 10px;
`

const Desc = styled.p`
  margin: 0;
`

const Item = ({ thumb, url, header, desc, ...rest }) => (
  <Cont href={url} target="_blank" rel="noopener noreferrer" {...rest}>
    {thumb && <Thumb src={thumb} />}
    <Header>{header}</Header>
    {desc && <Desc>{desc}</Desc>}
  </Cont>
)
