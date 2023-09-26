import './globals.css'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'ChartJS',
  description: ''
}

export default function RootLayout ({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <html lang="br">
      <body>
        <div id='portal' />
        {children}
      </body>
    </html>
  )
}