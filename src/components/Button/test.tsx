import { render, screen } from 'utils/test-helpers'

import { Button } from '.'

describe('<Button />', () => {
  it('renders the button correctly', () => {
    render(<Button>button</Button>)
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toBeInTheDocument()
  })

  it('renders a disabled button correctly', () => {
    render(<Button disabled>button</Button>)
    const button = screen.getByRole('button', { name: /button/i })
    expect(button).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
    })
  })

  it('renders the button as a link correctly', () => {
    render(
      <Button as="a" href="/link">
        button
      </Button>
    )
    const button = screen.getByRole('link', { name: /button/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/link')
  })
})
