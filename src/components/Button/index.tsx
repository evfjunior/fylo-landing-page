import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { ArrowRightCircleFill as Icon } from '@styled-icons/bootstrap'

import * as S from './styles'

export type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
  disabled?: boolean
  ghost?: boolean
} & ButtonTypes

export function Button({
  children,
  disabled = false,
  ghost = false,
  ...rest
}: ButtonProps) {
  return (
    <S.Container disabled={disabled} ghost={ghost} {...rest}>
      {children}
      {ghost && <span data-testid="icon">{<Icon size={12} />}</span>}
    </S.Container>
  )
}
