import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    max-width: 28rem;
    padding: ${theme.spacings.small};
    border-radius: 0.4rem;
    background-color: ${theme.colors.testimonialsBg};

    ${media.greaterThan('large')`
      max-width: 36rem;
      padding: 2.8rem;
      padding-top: 4rem;
    `}
  `}
`

export const Review = styled.p`
  ${({ theme }) => css`
    max-width: 42ch;
    margin-bottom: ${theme.spacings.xsmall};
    font-size: 1rem;
    line-height: 1.8;

    ${media.greaterThan('large')`
      max-width: 40ch;
      margin-bottom: 2rem;
      font-size: 1.4rem;
      letter-spacing: 0.04rem;
      line-height: 1.6
    `}
  `}
`

export const Profile = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: ${theme.spacings.small};
    width: ${theme.spacings.small};
    border-radius: 50%;
    background-color: ${theme.colors.blue};
    overflow: hidden;
  `}
`

export const Info = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100%;
    margin-left: 1rem;
  `}
`

export const Name = styled.h4`
  ${() => css`
    margin-bottom: 0.2rem;
    font-size: 1rem;
    letter-spacing: 0.04rem;

    ${media.greaterThan('large')`
      margin-bottom: 0.1rem;
      letter-spacing: 0.08rem;
    `}
  `}
`

export const Role = styled.p`
  ${() => css`
    font-size: 0.8rem;
    letter-spacing: 0.04rem;

    ${media.greaterThan('large')`
      letter-spacing: 0.04rem;
    `}
  `}
`
