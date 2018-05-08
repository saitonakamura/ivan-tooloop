import { Title, Caption, Code, H1, H2, H3, H4 } from 'presa/blocks'
import styled from 'styled-components'
import { colors } from '../colors'

export const ItTitle = styled(Title)`
  font-weight: lighter;
  font-size: 4em;
  padding-bottom: ${p => (p.bordered ? '10px' : 0)};
  border-bottom: ${p => (p.bordered ? '5px' : 0)} solid ${colors.purple};
`

export const ItH1 = styled(H1)`
  font-weight: normal;
  padding-bottom: 5px;
  border-bottom: ${p => (p.bordered ? '5px' : 0)} solid ${colors.purple};
`

export const ItH2 = styled(H2)`
  padding-bottom: 5px;
  border-bottom: ${p => (p.bordered ? '5px' : 0)} solid ${colors.purple};
`

export const ItH3 = styled(H3)``

export const ItH4 = styled(H4)``

export const ItCaption = styled(Caption)``

export const ItCode = styled(Code)``

export const Paper = styled.div`
  background: rgb(255, 255, 255);
  box-shadow: 0px 2px 19px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`
