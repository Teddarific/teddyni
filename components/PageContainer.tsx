import React from 'react'

export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={{
        boxSizing: 'border-box',
        height: '100vh',
        width: '100vw',
        padding: '24px 36px',
        backgroundColor: '#fafafa',
      }}
    >
      {children}
    </div>
  )
}
