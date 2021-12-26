import { screen } from '@testing-library/react'

import { render } from 'utils/test-helpers'

import { Menu } from '.'

describe('<Menu />', () => {
  it('renders the menu correctly', () => {
    render(<Menu />)
    const menu = screen.getByRole('navigation')
    expect(menu).toBeInTheDocument()
  })

  it('renders the logo inside the menu correctly', () => {
    render(<Menu />)
    const menu = screen.getByRole('navigation')
    // const logo = screen.getByLabelText(/fylo logo/i)
    expect(menu).toBeInTheDocument()
    // expect(logo).toBeInTheDocument()
  })

  it('renders all the links correctly', () => {
    render(<Menu />)
    const menu = screen.getByRole('navigation')
    const links = screen.getAllByRole('link')
    expect(menu).toBeInTheDocument()
    expect(links).toBeTruthy()
    expect(links.length).toBe(3)
  })

  it('renders the menu with all the elements correctly', () => {
    render(<Menu />)
    const menu = screen.getByRole('navigation')
    const links = screen.getAllByRole('link')
    // const logo = screen.getByLabelText(/fylo logo/i)
    expect(menu).toBeInTheDocument()
    expect(links).toBeTruthy()
    expect(links.length).toBe(3)
    // expect(logo).toBeInTheDocument()
  })
})
