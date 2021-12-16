import { Meta, Story } from '@storybook/react'

import { TestimonialCard, TestimonialCardProps } from '.'

export default {
  title: 'TestimonialCard',
  component: TestimonialCard,
  argTypes: {
    name: {
      type: 'string'
    },
    role: {
      type: 'string'
    },
    profileImg: {
      type: 'string'
    },
    review: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<TestimonialCardProps> = (args) => (
  <TestimonialCard {...args} />
)

Default.args = {
  review:
    'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
  avatar: '/assets/profile.jpg',
  name: 'Iva Boyd',
  role: 'Founder & CEO, Huddle'
}
