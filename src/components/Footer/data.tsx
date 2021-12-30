import {
  FacebookF as Facebook,
  Instagram,
  Twitter
} from '@styled-icons/fa-brands'
import {
  Email,
  LocationOn as Location,
  PhoneInTalk as Phone
} from '@styled-icons/material-sharp'

const small = 14
const medium = 20

export const address = {
  icon: <Location size={medium} />,
  info:
    '<p>4579 Bay Street</p>' + '<p>Toronto, ON M5J 2R8</p>' + '<p>Canada</p>'
}

export const contact = [
  {
    icon: <Phone size={medium} />,
    info: '+1-543-123-4567'
  },
  {
    icon: <Email size={medium} />,
    info: 'contact@fylo.com'
  }
]

export const about = [
  {
    name: 'About Us',
    href: '/'
  },
  {
    name: 'Jobs',
    href: '/'
  },
  {
    name: 'Press',
    href: '/'
  },
  {
    name: 'Blog',
    href: '/'
  }
]

export const legal = [
  {
    name: 'Contact Us',
    href: '/'
  },
  {
    name: 'Terms',
    href: '/'
  },
  {
    name: 'Privacy',
    href: '/'
  }
]

export const social = [
  {
    icon: <Facebook size={small} title="Facebook" />,
    href: 'https://facebook.com'
  },
  {
    icon: <Twitter size={small} title="Twitter" />,
    href: 'https://twitter.com'
  },
  {
    icon: <Instagram size={small} title="Instagram" />,
    href: 'https://instagram.com'
  }
]
