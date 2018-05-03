import React from 'react'
import { Slide } from 'presa'
import styled from 'styled-components'
import SantaClausIcon from '../assets/svgReact/SantaClaus'
import { ItCode } from '../blocks'

export const DevIvanSlide = props => (
  <Slide name="Иван Тулуп и его карты" {...props}>
    <Cont>
      <Cards>
        <SantaClausIcon size={40} />
      </Cards>
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

const Cont = styled.div`
  display: flex;
  flex-direction: row;
`

const Cards = styled.div`
  width: 50%;
`
