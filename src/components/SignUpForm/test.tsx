import userEvent from '@testing-library/user-event'

import { render, screen, waitFor } from 'utils/test-helpers'

import { SignUpForm } from '.'

describe('<SignUpForm />', () => {
  it('renders the form and all the content correctly', () => {
    render(<SignUpForm buttonLabel="button label" inputLabel="input label" />)

    const form = screen.getByRole('form')
    const label = screen.getByLabelText(/input label/i)
    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /button label/i })

    expect(form).toBeInTheDocument()
    expect(label).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()
  })

  it('works properly when the user inputs some text', async () => {
    render(<SignUpForm buttonLabel="button label" inputLabel="input label" />)

    const input = screen.getByRole('textbox')
    const text = 'example@email.com'

    userEvent.type(input, text)

    await waitFor(() => expect(input).toHaveValue(text))
  })

  it('shows a disabled button when a wrong email format is entered', async () => {
    render(<SignUpForm buttonLabel="button label" inputLabel="label text" />)

    const button = screen.getByRole('button', { name: /button label/i })
    const input = screen.getByRole('textbox')
    const text = 'example#email'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(button).toHaveAttribute('disabled')
    })
  })

  it('shows a disabled button after input clearance', async () => {
    render(<SignUpForm buttonLabel="button label" inputLabel="label text" />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /button label/i })
    const text = 'email'

    userEvent.type(input, text)
    userEvent.clear(input)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
      expect(button).toHaveAttribute('disabled')
    })
  })

  it('shows an error message when a wrong email format is entered', async () => {
    render(<SignUpForm buttonLabel="button label" inputLabel="input label" />)

    const input = screen.getByRole('textbox')
    const text = 'example#email.com'

    userEvent.type(input, text)

    await waitFor(() => {
      const errorMessage = screen.queryByText(
        /please enter a valid email address/i
      )

      expect(input).toHaveValue(text)
      expect(errorMessage).toBeInTheDocument()
    })
  })

  it('shows an error message when the input is empty', async () => {
    render(<SignUpForm buttonLabel="button label" inputLabel="input label" />)

    const input = screen.getByRole('textbox')
    const text = 'email'

    userEvent.type(input, text)
    userEvent.clear(input)

    await waitFor(() => {
      const errorMessage = screen.queryByText(
        /please enter your email address/i
      )

      expect(input).not.toHaveValue(text)
      expect(errorMessage).toBeInTheDocument()
    })
  })

  it('submits the form if everything looks good', async () => {
    const handleSubmit = jest.fn()

    render(
      <SignUpForm
        buttonLabel="button label"
        inputLabel="input label"
        onSubmit={handleSubmit}
      />
    )

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    const text = 'example@email.com'

    userEvent.type(input, text)
    userEvent.click(button)

    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({ email: text })
    )
  })

  it('is accessible using the tab key', () => {
    render(<SignUpForm buttonLabel="button label" inputLabel="label text" />)

    const label = screen.getByLabelText(/label text/i)
    const input = screen.getByRole('textbox')

    userEvent.tab()

    expect(label).toHaveFocus()
    expect(input).toHaveFocus()
  })
})
