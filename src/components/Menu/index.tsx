import Link from 'next/link'

import { Logo } from 'components/Logo'

import * as S from './styles'

export function Menu() {
  const links = [
    { name: 'features', slug: '/features' },
    { name: 'team', slug: '/team' },
    { name: 'sign in', slug: '/sign-in' }
  ]

  return (
    <S.Container>
      <Logo />

      <S.Navigation>
        <ul>
          {links.map((link) => (
            <Link key={link.slug} href={link.slug} passHref>
              <a>
                <li>{link.name}</li>
              </a>
            </Link>
          ))}
        </ul>
      </S.Navigation>
    </S.Container>
  )
}
