import Image from 'next/image'

import * as S from './styles'

export type FeatureCardProps = {
  content: string
  heading: string
  icon: string
  iconDescription: string
}

export function FeatureCard({
  content,
  heading,
  icon,
  iconDescription
}: FeatureCardProps) {
  return (
    <S.Container>
      <S.IconWrapper>
        <Image
          src={icon}
          layout="fill"
          objectFit="contain"
          alt={`icon of ${iconDescription}`}
        />
      </S.IconWrapper>
      <S.Heading>{heading}</S.Heading>
      <S.Content>{content}</S.Content>
    </S.Container>
  )
}
