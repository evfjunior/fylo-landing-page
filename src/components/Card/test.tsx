import { screen } from '@testing-library/react'

import { render } from 'utils/test-helpers'

import { Card } from '.'

describe('<Card />', () => {
  it('should render the component and the text correctly', () => {
    render(
      <Card
        heading="Lorem ipsum"
        leading="Dolor sit amet, consectetur adipiscing elit."
      />
    )

    const component = screen.getByRole('article')
    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'Lorem ipsum'
    })
    const leading = screen.getByText(
      'Dolor sit amet, consectetur adipiscing elit.'
    )

    expect(component).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(leading).toBeInTheDocument()
  })
})
