import { Meta, Story } from '@storybook/react'

import { FeatureCard, FeatureCardProps } from '.'

export default {
  title: 'FeatureCard',
  component: FeatureCard,
  argTypes: {
    icon: {
      type: 'string'
    },
    iconDescription: {
      type: 'string'
    },
    heading: {
      type: 'string'
    },
    content: {
      type: 'string'
    }
  },
  args: {
    icon: '/assets/feature.svg',
    iconDescription: 'a computer and a mobile phone',
    heading: 'Access your files, anywhere',
    content:
      'The ability to use a smartphone, tablet or computer to access your account means your files follow you everywhere.'
  }
} as Meta

export const Default: Story<FeatureCardProps> = (args) => (
  <FeatureCard {...args} />
)
