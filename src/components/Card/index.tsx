import * as S from './styles'

export type CardProps = {
  heading: string
  leading: string
}

export function Card({ heading, leading }: CardProps) {
  return (
    <S.Container>
      <S.Heading>{heading}</S.Heading>
      <S.Leading>{leading}</S.Leading>
    </S.Container>
  )
}
