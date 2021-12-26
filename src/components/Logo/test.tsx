import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('<Logo />', () => {
  it('renders the medium size logo by default', () => {
    const alt = 'Fylo logo'
    const src = '/assets/logo.svg'

    render(<Logo src={src} alt={alt} />)

    const logo = screen.getByAltText(alt)
    const link = screen.getByRole('link')

    expect(logo).toBeInTheDocument()
    expect(link).toHaveStyle({ height: '2.2rem', width: '7rem' })
  })

  it('renders a large size logo', () => {
    const alt = 'Fylo logo'
    const src = '/assets/logo.svg'

    render(<Logo src={src} alt={alt} size="large" />)

    const logo = screen.getByAltText(alt)
    const link = screen.getByRole('link')

    expect(logo).toBeInTheDocument()
    expect(link).toHaveStyle({ height: '4.8rem', width: '16rem' })
  })

  it('links to the home page correctly', () => {
    const alt = 'Fylo logo'
    const src = '/assets/logo.svg'

    render(<Logo src={src} alt={alt} size="large" />)

    const logo = screen.getByAltText(alt)
    const link = screen.getByRole('link')

    expect(logo).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/')
  })
})
