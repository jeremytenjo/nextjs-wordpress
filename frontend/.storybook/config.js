import { configure, addParameters, addDecorator } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { create } from '@storybook/theming'

addParameters({
  options: {
    name: 'VCG - Documentation',
    theme: create({
      base: 'light',
    }),
    panelPosition: 'right',
    showPanel: false,
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

configure(require.context('../components', true, /sb.stories\.(js|mdx)$/), module)
