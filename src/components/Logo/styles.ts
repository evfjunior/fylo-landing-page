import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${() => css`
    height: 2.2rem;
    width: 8rem;
    cursor: pointer;

    ${media.greaterThan('large')`
      height: 4.8rem;
      width: 17.65rem;
    `}
  `}
`
