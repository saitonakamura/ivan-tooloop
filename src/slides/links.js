import React from 'react'
import styled from 'styled-components'
import { Slide, BuiltWithPresa } from 'presa'
import slideBackImg from '../assets/images/slide-back.png'

export const LinksSlide = props => (
  <Slide background={slideBackImg} {...props}>
    link to the slides
    <LinkWrap>
      <LinkIcon>👉 </LinkIcon>
      <FinalLink
        target="_blank"
        rel="noreferer noopener"
        href="https://saitonakamura.github.io/ivan-tooloop/"
      >
        saitonakamura.github.io/ivan-tooloop/
      </FinalLink>
    </LinkWrap>
    source code
    <LinkWrap>
      <LinkIcon>⭐️ </LinkIcon>
      <FinalLink
        target="_blank"
        rel="noreferer noopener"
        href="https://github.com/saitonakamura/ivan-tooloop"
      >
        github.com/saitonakamura/ivan-tooloop
      </FinalLink>
    </LinkWrap>
    slides made with
    <LinkWrap>
      <LinkIcon>🔥 </LinkIcon>
      <FinalLink
        target="_blank"
        rel="noreferer noopener"
        href="http://github.com/molefrog/presa"
      >
        github.com/molefrog/presa
      </FinalLink>
    </LinkWrap>
    <Footer>
      <BuiltWithPresa size={18} />
      <OwnContacts>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/@saitonakamura"
        >
          @saitonakamura
        </a>
      </OwnContacts>
    </Footer>
  </Slide>
)

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 140px;
  margin-bottom: 10px;
`

const OwnContacts = styled.div`
  font-size: 22px;
  font-weight: 500;
  margin-left: &, a {
    color: #3f5ffb;
  }
`

const LinkWrap = styled.div`
  display: flex;
  margin-top: 4px;
  margin-bottom: 32px;
`

const LinkIcon = styled.div`
  font-size: 36px;
  margin-right: 10px;
`

const FinalLink = styled.a`
  font-size: 32px;
  font-weight: 500;
  text-decoration: underline;
  color: #333;
  padding: 0 8px;
  transition: all 0.2s ease;
  &:hover {
    background: #333;
    color: white;
  }
`
