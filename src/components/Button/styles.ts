import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { ButtonProps } from '.'

const Modifiers = {
  disabled: (theme: DefaultTheme) => css`
    &:disabled {
      background: ${theme.colors.blue};
      filter: saturate(0%);
      cursor: not-allowed;
    }
  `
}

export const Container = styled.button<ButtonProps>`
  ${({ theme, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xsmall};
    width: 100%;
    max-width: 24rem;
    border-radius: ${theme.border.radius};
    background-image: linear-gradient(
      90deg,
      ${theme.colors.cyan},
      ${theme.colors.blue}
    );
    background-position: center right 25%;
    background-size: 160%;
    color: ${theme.colors.white};
    font-family: ${theme.font.family.heading};
    font-weight: ${theme.font.weight.bold};
    text-transform: capitalize;
    transition: all ${theme.transition.default};

    &:focus {
      box-shadow: 0 0 ${theme.spacings.xxsmall} ${theme.colors.cyan};
    }

    &:hover {
      filter: saturate(65%) brightness(110%);
      background-position: left;
      background-size: 200%;
    }

    ${disabled && Modifiers.disabled(theme)};

    ${media.greaterThan('large')`
      padding: 2rem;
      max-width: 28rem;
      font-size: 1.6rem;
    `}
  `}
`
