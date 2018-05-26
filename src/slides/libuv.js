import React from 'react'
import { Slide } from '@saitonakamura/presa'
import styled from 'styled-components'
import { Caption, Paper } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'
import libuvImg from '../assets/images/libuv.png'

export const LibuvSlide = props => (
  <Slide centered background={slideBackImg} {...props}>
    <img src={libuvImg} height="40%" />
    <List>
      <ListItem>
        <i>Linux</i>
        <br />epoll / POSIX AIO
      </ListItem>
      <ListItem>
        <i>BSD</i>
        <br />kqueue
      </ListItem>
      <ListItem>
        <i>Windows</i>
        <br />IOCP
      </ListItem>
      <ListItem>
        <i>Solaris</i>
        <br />event ports
      </ListItem>
    </List>
    <Caption>И одна Libuv дабы править всеми</Caption>
  </Slide>
)

const List = styled.ul`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

const ListItem = Paper.withComponent('li')
  .extend`display: inline-block; font-size: 30px;`
