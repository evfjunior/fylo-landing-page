import Image from 'next/image'

import * as S from './styles'

export type TestimonialCardProps = {
  avatar: string
  name: string
  review: string
  role: string
}

export function TestimonialCard({
  name,
  avatar,
  review,
  role
}: TestimonialCardProps) {
  return (
    <S.Container>
      <S.Review>{review}</S.Review>
      <S.Profile>
        <S.ImageWrapper>
          <Image
            src={avatar}
            layout="fill"
            objectFit="cover"
            alt={`${name} picture`}
          />
        </S.ImageWrapper>
        <S.Info>
          <S.Name>{name}</S.Name>
          <S.Role>{role}</S.Role>
        </S.Info>
      </S.Profile>
    </S.Container>
  )
}
