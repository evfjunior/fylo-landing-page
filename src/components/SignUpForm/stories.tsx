import { Meta, Story } from '@storybook/react'

import { SignUpForm, SignUpFormProps } from '.'

export default {
  title: 'SignUpForm',
  component: SignUpForm,
  argTypes: {
    buttonLabel: {
      type: 'string'
    }
  },
  args: {
    buttonLabel: 'get started for free'
  }
} as Meta

export const Default: Story<SignUpFormProps> = (args) => (
  <SignUpForm {...args} />
)
