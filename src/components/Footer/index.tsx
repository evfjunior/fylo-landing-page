import Link from 'next/link'

import { Logo } from 'components/Logo'

import { about, address, contact, legal, social } from './data'

import * as S from './styles'

export function Footer() {
  // Mock data
  const logoProps = {
    alt: 'Fylo logo',
    src: '/assets/logo.svg'
  }

  return (
    <S.Container>
      <Logo src={logoProps.src} alt={logoProps.alt} size="large" />

      <S.Content>
        <S.ContactArea data-testid="contact">
          <S.Address>
            <S.Icon>{address.icon}</S.Icon>
            <S.Info dangerouslySetInnerHTML={{ __html: address.info }} />
          </S.Address>

          <S.ContactWrapper>
            {contact.map((item, key) => (
              <S.Contact key={key}>
                <S.Icon>{item.icon}</S.Icon>
                <S.Info>{item.info}</S.Info>
              </S.Contact>
            ))}
          </S.ContactWrapper>
        </S.ContactArea>

        <S.NavigationArea>
          <div aria-labelledby="about">
            <S.NavigationWrapper id="about" data-testid="about">
              {about.map((item, key) => (
                <Link href={item.href} passHref key={key}>
                  <a>{item.name}</a>
                </Link>
              ))}
            </S.NavigationWrapper>
          </div>

          <div aria-labelledby="legal">
            <S.NavigationWrapper id="legal" data-testid="legal">
              {legal.map((item, key) => (
                <Link href={item.href} passHref key={key}>
                  <a>{item.name}</a>
                </Link>
              ))}
            </S.NavigationWrapper>
          </div>
        </S.NavigationArea>

        <div aria-labelledby="social">
          <S.Social id="social" data-testid="social">
            {social.map((item) => (
              <Link href={item.href} passHref key={item.href}>
                <a>{item.icon}</a>
              </Link>
            ))}
          </S.Social>
        </div>
      </S.Content>
    </S.Container>
  )
}
