import React from 'react'

import { aboveBreakpoint } from '../utils/constants'

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={{
        boxSizing: 'border-box',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#f8f5ec',
        padding: '24px 36px',
        [aboveBreakpoint.sm]: {
          padding: '36px 48px',
        },
        [aboveBreakpoint.md]: {
          padding: '80px 140px',
        },
      }}
    >
      {children}
    </div>
  )
}
