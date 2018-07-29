// Lobster theme.js
export default {
  font: 'Lobster',
  monospace: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace',
  fontSizes: [
    16, 24, 32, 48, 64, 96, 128
  ],
  colors: {
    text: '#000',
    background: 'transparent',
    link: '#07c',
    heading: '#000',
    quote: '#000',
    pre: '#f0f',
    preBackground: '#333',
    code: '#f0f',
    codeBackground: 'transparent',
  },
  css: {
    // apply any styles to the root element
  },
  // custom CSS can be provided to any of the default components:
  heading: {
    fontWeight: 400
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    }
  }
}
