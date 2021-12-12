import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.menu`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: ${theme.layers.menu};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: ${theme.spacings.xsmall} 0;
    background-color: ${theme.colors.introBg};
    font-family: ${theme.font.family.heading};

    ${media.greaterThan('large')`
      padding: ${theme.spacings.huge} 0;
    `}
  `}
`

export const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    text-transform: capitalize;

    ul {
      li {
        display: inline-block;
        padding: ${theme.spacings.xxsmall};
        opacity: 0.75;
        transition: opacity ${theme.transition.fast};

        &:hover {
          font-weight: ${theme.font.weight.bold};
          text-decoration: underline;
          opacity: 1;
        }
      }

      a:not(:last-of-type) {
        margin-right: ${theme.spacings.xxsmall};
      }
    }

    ${media.greaterThan('large')`
      font-size: 1.6rem;

      ul a:not(:last-of-type) {
        margin-right: ${theme.spacings.xlarge};
      }
    `}
  `}
`
