import { Meta, Story } from '@storybook/react'

import { Logo, LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    alt: {
      type: 'string'
    },
    size: {
      control: {
        type: 'select',
        options: ['medium', 'large']
      }
    },
    src: {
      type: 'string'
    }
  },
  args: {
    src: '/assets/logo.svg',
    alt: 'Fylo logo'
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
