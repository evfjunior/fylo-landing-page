import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 36rem;
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('large')`
      max-width: 42rem;
    `}
  `}
`

export const IconWrapper = styled.div`
  ${() => css`
    position: relative;
    height: 6.2rem;
    width: 6.2rem;
    margin-bottom: 3.6rem;

    ${media.greaterThan('large')`
      height: 8rem;
      width: 8rem;
      margin-bottom: 3rem;
    `}
  `}
`

export const Heading = styled.h3`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    font-size: 1.6rem;

    ${media.greaterThan('large')`
      font-size: 1.8rem;
    `}
  `}
`

export const Content = styled.p`
  ${() => css`
    max-width: 40ch;
    line-height: 1.6;
    text-align: center;

    ${media.greaterThan('large')`
      &:first-of-type,
      &:last-of-type {
        max-width: 44ch;
      }

      max-width: 49ch;
    `}
  `}
`
