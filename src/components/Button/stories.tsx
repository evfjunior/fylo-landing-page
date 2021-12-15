import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    control: {
      disabled: {
        type: 'boolean'
      }
    }
  }
} as Meta

export const Default: Story<ButtonProps> = (args) => <Button {...args} />

Default.args = {
  children: 'Button',
  as: 'button'
}

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />

AsLink.args = {
  children: 'Link',
  as: 'a',
  href: '/link'
}
