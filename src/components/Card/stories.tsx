import { Meta, Story } from '@storybook/react'

import { Card, CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    heading: {
      type: 'string',
      defaultValue: 'Lorem ipsum'
    },
    leading: {
      type: 'string',
      defaultValue: 'Dolor sit amet, consectetur adipiscing elit.'
    }
  }
} as Meta

export const Default: Story<CardProps> = (args) => <Card {...args} />
