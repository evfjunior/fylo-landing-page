import { render, screen } from '@testing-library/react'

import { Logo } from '.'

describe('<Logo />', () => {
  it('renders the logo correctly', () => {
    render(<Logo />)
    const logo = screen.getByLabelText('fylo logo')
    expect(logo).toBeInTheDocument()
  })

  it('links to the home page', () => {
    render(<Logo />)
    const logo = screen.getByLabelText('fylo logo')
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('href', '/')
  })
})
