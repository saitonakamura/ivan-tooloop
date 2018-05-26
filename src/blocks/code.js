import React from 'react'
import styled, { withTheme } from 'styled-components'
import { defaultColorScheme } from '@saitonakamura/presa/blocks'
import Highlight from 'react-syntax-highlighter/prism'

const defaultLineHeight = 1.4

// Override additional styles without
// touching the theme object.
const StyledHighlight = styled(Highlight)`
  font-size: ${props => props.fontSize}px;
  line-height: ${defaultLineHeight};
  text-align: left;
  &,
  code,
  pre {
    font-family: ${props => props.theme.monoFont};
  }
`

class CodeComponent extends React.Component {
  static defaultProps = {
    language: 'javascript',
  }

  getSyntaxTheme() {
    const overridenTheme = this.props.theme.syntaxHighlight

    // Allow to override syntax highlighting theme
    // using global styled-components theme settings.
    if (overridenTheme) {
      return overridenTheme
    }

    return defaultColorScheme
  }

  render() {
    const { className, language, theme, style, ...rest } = this.props
    const code = this.props.children

    // Use given font size or fall back to theme defaults
    const fontSize = this.props.fontSize || theme.slide.baseFontSize

    return (
      <StyledHighlight
        style={{ ...this.getSyntaxTheme(), ...style }}
        language={language}
        fontSize={fontSize}
        className={className}
        {...rest}
      >
        {code}
      </StyledHighlight>
    )
  }
}

export const Code = withTheme(CodeComponent)
