import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import { render, RenderResult } from '@testing-library/react'

import { theme } from 'styles'

const customRender = (children: ReactElement): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)

export * from '@testing-library/react'
export { customRender as render }
