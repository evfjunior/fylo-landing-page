import { screen } from '@testing-library/react'

import { render } from 'utils/test-helpers'

import { FeatureCard } from '.'

describe('<FeatureCard />', () => {
  it("renders the card and all it's content correctly", () => {
    render(
      <FeatureCard
        icon="/assets/feature.svg"
        iconDescription="a feature"
        heading="Lorem ipsum"
        content="Lorem ipsum dolor"
      />
    )

    const card = screen.getByRole('article')
    const icon = screen.getByRole('img')
    const heading = screen.getByRole('heading', {
      level: 3,
      name: /Lorem ipsum/i
    })
    const content = screen.getByText(/Lorem ipsum dolor/i)

    expect(card).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('alt', 'icon of a feature')
    expect(heading).toBeInTheDocument()
    expect(content).toBeInTheDocument()
  })
})
