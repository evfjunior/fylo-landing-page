import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

export type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
  disabled?: boolean
} & ButtonTypes

export function Button({ children, disabled = false, ...rest }: ButtonProps) {
  return (
    <S.Container disabled={disabled} {...rest}>
      {children}
    </S.Container>
  )
}
