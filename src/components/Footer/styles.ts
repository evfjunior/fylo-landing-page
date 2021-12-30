import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.footerBg};
    line-height: 1.6;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xlarge};
    padding-bottom: ${theme.spacings.xxsmall};

    ${media.greaterThan('large')`
      display: flex;
      align-items: flex-start;
      padding-bottom: ${theme.spacings.xlarge};
    `}
  `}
`

export const ContactArea = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: ${theme.spacings.huge};

    ${media.greaterThan('large')`
      flex-direction: row;
      justify-content: initial;
      margin-bottom: 0;
      margin-right: 10rem;
    `}
  `}
`

export const Address = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    max-width: 42ch;
    margin-bottom: ${theme.spacings.small};

    // Pushes the location icon down
    > div:first-child {
      margin-top: 0.4rem;
    }

    ${media.greaterThan('large')`
      margin-bottom: 0;
      margin-right: 10rem;
      font-size: 1.6rem;
    `}
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: ${theme.spacings.small};
  `}
`

export const Info = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`

export const ContactWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`

export const Contact = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
      margin-bottom: ${theme.spacings.small};
    }
  `}
`

export const NavigationArea = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.huge};

    ${media.greaterThan('large')`
      display: flex;
      margin-bottom: 0;
      margin-right: 10rem;
    `}
  `}
`

export const NavigationWrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('large')`
      margin-right: 7.6rem;
      margin-bottom: 0;
      font-size: 1.6rem;
    `}

    a {
      width: fit-content;

      &:not(:last-of-type) {
        margin-bottom: ${theme.spacings.small};
      }

      &:hover {
        font-weight: ${theme.font.weight.bold};
      }
    }
  `}
`

export const Social = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('large')`
      margin-bottom: 0;
    `}

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.6rem;
      border: 0.1rem solid ${theme.colors.white};
      border-radius: 50%;

      &:not(:last-of-type) {
        margin-right: 1.2rem;
      }
    }
  `}
`
