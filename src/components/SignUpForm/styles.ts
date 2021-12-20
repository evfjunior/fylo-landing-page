import { Field, Form } from 'formik'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const FormElement = styled(Form)`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${media.greaterThan('large')`
      flex-direction: row;
      align-items: flex-start;
    `}
  `}
`

export const InputWrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 24rem;

    ${media.greaterThan('large')`
      align-items: flex-start;
      max-width: 48rem;
      margin-right: 2.8rem;
    `}
  `}
`

export const Label = styled.label`
  ${() => css`
    position: absolute;
    height: 1px;
    width: 1px;
    margin: -1px;
    border: none;
    clip: rect(0 0 0 0);
    overflow: hidden;
    white-space: nowrap;
  `}
`

export const Input = styled(Field)`
  ${() => css`
    width: 100%;
    margin-bottom: 2.4rem;
    padding: 1.6rem 2rem;
    border: none;
    border-radius: 3rem;

    ${media.greaterThan('large')`
      margin-bottom: 0;
      padding: 2rem 4.4rem;
    `}
  `}
`

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    margin-top: -${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xxsmall};
    color: ${theme.colors.red};
    font-size: 1rem;
    font-weight: ${theme.font.weight.bold};
    letter-spacing: 0.04rem;

    ${media.greaterThan('large')`
      margin-top: 0.8rem;
      margin-bottom: 0;
      margin-left: 4.4rem;
      letter-spacing: 0.08rem;
    `}
  `}
`
