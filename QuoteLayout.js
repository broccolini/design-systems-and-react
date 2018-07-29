import React from 'react'
import Box from 'superbox'

export default ({ children }) =>
  <Box
    p={4}
    bg='black'
    color='white'
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      '& a': {
        fontWeight: 'bold',
        color: 'inherit'
      }
    }}>
    {children}
  </Box>
