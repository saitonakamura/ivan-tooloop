import React from 'react'
import { Fragment } from '@saitonakamura/presa'
import {
  Title,
  Caption,
  H1,
  H2,
  H3,
  H4,
  Code,
} from '@saitonakamura/presa/blocks'
import styled, { css } from 'styled-components'
import { colors } from '../colors'
// import { Code } from './code'

export const ItTitle = styled(Title)`
  font-weight: lighter;
  font-size: 4em;
  padding-bottom: ${p => (p.bordered ? '10px' : 0)};
  border-bottom: ${p => (p.bordered ? '5px' : 0)} solid ${colors.purple};
  margin-bottom: ${p => p.margin || 0};
`

export const ItH1 = styled(H1)`
  font-weight: normal;
  padding-bottom: 5px;
  border-bottom: ${p => (p.bordered ? '5px' : 0)} solid ${colors.purple};
  margin-bottom: ${p => p.margin || 0};
`

export const ItH2 = styled(H2)`
  padding-bottom: 5px;
  border-bottom: ${p => (p.bordered ? '5px' : 0)} solid ${colors.purple};
  margin-bottom: ${p => p.margin || 0};
`

export const ItH3 = styled(H3)``

export const ItH4 = styled(H4)`
  font-weight: 500;
`

export const ItCaption = styled(Caption)``

export const ItCode = styled(Code)`
  margin: ${p => (p.margined ? '40px 0' : 0)};
`

export const Paper = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const RenderWhenActiveBehaviour = styled.div`
  display: ${p => (p.active ? 'block' : 'none')};
`

export const RenderWhenActiveFragment = props => (
  <Fragment {...props} behaviour={RenderWhenActiveBehaviour} />
)

export const visuallyHidden = css`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`

export * from './fragmentedList'
export * from './button'
export * from './caption'
export * from './strike'
export * from './divider'
export * from './link'
