import { screen } from '@testing-library/react'

import { render } from 'utils/test-helpers'

import { TestimonialCard } from '.'

describe('<TestimonialCard />', () => {
  it("renders the card and it's content correctly", () => {
    render(
      <TestimonialCard
        review="Lorem ipsum"
        avatar="/assets/profile.jpg"
        name="Awesome Person"
        role="BigCompany MVP"
      />
    )

    const card = screen.getByRole('article')
    const review = screen.getByText(/Lorem ipsum/i)
    const avatar = screen.getByRole('img')
    const name = screen.getByText(/Awesome Person/i)
    const role = screen.getByText(/BigCompany MVP/i)

    expect(card).toBeInTheDocument()
    expect(review).toBeInTheDocument()
    expect(avatar).toBeInTheDocument()
    expect(avatar).toHaveAttribute('alt', 'Awesome Person picture')
    expect(name).toBeInTheDocument()
    expect(role).toBeInTheDocument()
  })
})
