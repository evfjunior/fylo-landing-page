import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { LogoProps } from '.'

const Modifiers = {
  medium: () => css`
    height: 2.2rem;
    width: 7rem;

    ${media.greaterThan('large')`
      height: 4.8rem;
      width: 16rem;
    `}
  `,
  large: () => css`
    height: 4.8rem;
    width: 16rem;
  `
}

export const Container = styled.div``

export const ImageWrapper = styled.a<Pick<LogoProps, 'size'>>`
  ${({ size }) => css`
    position: relative;
    display: block;
    ${!!size && Modifiers[size]}
  `}
`
