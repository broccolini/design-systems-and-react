import React from 'react'
import Box from 'superbox'

export default ({ children }) =>
  <Box
    p={4}
    bg='black'
    color='white'
    css={{
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      WebkitFontSmoothing: 'antialiased',
      textAlign: 'left',
      '& a': {
        fontWeight: 'bold',
        color: 'inherit'
      },
      '& p': {
        textAlign: 'right',
      }
    }}>
    {children}
  </Box>
