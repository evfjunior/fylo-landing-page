import { render, screen } from 'utils/test-helpers'

import { Footer } from '.'

describe('<Footer />', () => {
  it('renders the footer and the content correctly', () => {
    render(<Footer />)

    const logo = screen.getByRole('img', { name: /Fylo logo/i })
    const contact = screen.getByTestId('contact')
    const about = screen.getByTestId('about')
    const legal = screen.getByTestId('legal')
    const social = screen.getByTestId('social')

    expect(logo).toBeInTheDocument()
    expect(contact).toBeInTheDocument()
    expect(about).toBeInTheDocument()
    expect(legal).toBeInTheDocument()
    expect(social).toBeInTheDocument()
  })

  it('makes sure all the social links are accessible and work properly', () => {
    render(<Footer />)

    const facebookLink = 'https://facebook.com'
    const twitterLink = 'https://twitter.com'
    const instagramLink = 'https://instagram.com'

    const facebookIcon = screen.getByRole('img', { name: /Facebook/i })
    const twitterIcon = screen.getByRole('img', { name: /Twitter/i })
    const instagramIcon = screen.getByRole('img', { name: /Instagram/i })

    expect(facebookIcon).toBeInTheDocument()
    expect(facebookIcon.parentElement).toHaveAttribute('href', facebookLink)
    expect(twitterIcon).toBeInTheDocument()
    expect(twitterIcon.parentElement).toHaveAttribute('href', twitterLink)
    expect(instagramIcon).toBeInTheDocument()
    expect(instagramIcon.parentElement).toHaveAttribute('href', instagramLink)
  })
})
