import { Meta, Story } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    ghost: {
      control: {
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

export const AsGhostLink: Story<ButtonProps> = (args) => <Button {...args} />

AsGhostLink.args = {
  children: 'Ghost link',
  as: 'a',
  href: '/link',
  ghost: true
}
