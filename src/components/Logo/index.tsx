import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export type LogoProps = {
  alt: string
  size?: 'medium' | 'large'
  src: string
}

export function Logo({ alt, size = 'medium', src }: LogoProps) {
  return (
    <S.Container>
      <Link href="/" passHref>
        <S.ImageWrapper size={size}>
          <Image src={src} layout="fill" objectFit="contain" alt={alt} />
        </S.ImageWrapper>
      </Link>
    </S.Container>
  )
}
