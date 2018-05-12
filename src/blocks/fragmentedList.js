import React from 'react'
import styled from 'styled-components'
import { Fragment } from '@saitonakamura/presa'

export const FragmentList = ({ ...rest }) => <List {...rest} />

export const FragmentListItem = ({ ...rest }) => (
  <Fragment>
    <Item {...rest} />
  </Fragment>
)

const List = styled.ul`
  font-size: 2.5rem;
`

const Item = styled.li`
  text-align: left;
  list-style-type: circle;
`
