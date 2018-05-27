import React from 'react'
import styled from 'styled-components'
import { Slide, BuiltWithPresa } from 'presa'
import { Link } from '../blocks'
import slideBackImg from '../assets/images/slide-back.png'

export const LinksSlide = props => (
  <Slide background={slideBackImg} {...props}>
    Ссылка на слайды
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
    Исходники
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
    Сделано с
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
    Иконки от
    <LinkWrap style={{ flexWrap: 'wrap' }}>
      <LinkIcon>🍒 </LinkIcon>
      <FinalLink
        target="_blank"
        rel="noreferer noopener"
        href="https://www.flaticon.com/authors/good-ware"
      >
        Good ware
      </FinalLink>
      <span>, </span>
      <FinalLink
        target="_blank"
        rel="noreferer noopener"
        href="https://www.flaticon.com/authors/becris"
      >
        Becris
      </FinalLink>
      <span>, </span>
      <FinalLink
        target="_blank"
        rel="noreferer noopener"
        href="https://www.flaticon.com/authors/freepik"
      >
        Freepik
      </FinalLink>
      <span>, </span>
      <FinalLink
        target="_blank"
        rel="noreferer noopener"
        href="https://www.flaticon.com/authors/kiranshastry"
      >
        Kiranshastry
      </FinalLink>
      <span>, </span>
      <FinalLink
        target="_blank"
        rel="noreferer noopener"
        href="https://www.flaticon.com/authors/smashicons"
      >
        Smashicons
      </FinalLink>
      <span>с</span>
      <FinalLink
        target="_blank"
        rel="noreferer noopener"
        href="http://www.flaticon.com/"
      >
        www.flaticon.com
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
  align-items: baseline;
  margin-top: 4px;
  margin-bottom: 32px;
`

const LinkIcon = styled.div`
  font-size: 36px;
  margin-right: 10px;
`

const FinalLink = Link.extend`
  font-size: 32px;
  font-weight: 500;
  padding: 0 8px;
`
