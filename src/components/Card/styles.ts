import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.small};
    text-align: center;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.medium};
    `}
  `}
`

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: ${theme.font.weight.bold};
    line-height: 2;
  `}
`

export const Leading = styled.p`
  ${({ theme }) => css`
    max-width: 45ch;
    font-size: ${theme.font.sizes.medium};
    line-height: 1.6;
  `}
`
