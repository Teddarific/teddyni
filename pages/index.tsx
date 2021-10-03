import Image from 'next/image'

import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { PageContainer } from '../components/PageContainer'
import Avatar from '../public/avatar.png'
import { aboveBreakpoint } from '../utils/constants'

export default function Home() {
  return (
    <PageContainer>
      <div
        css={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div
          css={{
            alignSelf: 'center',
            borderRadius: '50%',
            border: '1px solid rgba(0, 0, 0, .2)',
            backgroundColor: '#e5dab8',
            overflow: 'hidden',
            position: 'relative',
            height: '120px',
            width: '120px',
            [aboveBreakpoint.sm]: {
              height: '150px',
              width: '150px',
            },
            [aboveBreakpoint.md]: {
              alignSelf: 'flex-start',
            },
          }}
        >
          <div
            css={{
              top: '10px',
              position: 'absolute',
            }}
          >
            <Image src={Avatar} alt="My avatar" />
          </div>
        </div>
        <div
          css={{
            marginTop: '24px',
            [aboveBreakpoint.sm]: {
              fontSize: '20px',
            },
            [aboveBreakpoint.md]: {
              marginBottom: '12px',
            },
          }}
        >{`👋 Hey there, I'm`}</div>
        <div
          css={{
            fontWeight: 700,
            '-webkit-text-stroke': 1,
            '-webkit-text-stroke-color': 'rgba(0, 0, 0, .9)',
            color: 'rgba(0, 0, 0, .72)',
            fontSize: '48px',
            [aboveBreakpoint.sm]: {
              fontSize: '60px',
            },
            [aboveBreakpoint.sm]: {
              fontSize: '72px',
            },
          }}
        >
          TEDDY NI
        </div>
        <hr
          css={{
            width: '100%',
            margin: '16px 0',
            maxWidth: '600px',
            [aboveBreakpoint.md]: {
              margin: '24px 0',
            },
          }}
        />
        <div
          css={{
            [aboveBreakpoint.sm]: {
              fontSize: '20px',
            },
          }}
        >
          Currently an engineer @
          <a href="https://heycanopy.com" css={{ textDecoration: 'none' }}>
            <span css={{ color: '#377acc', fontWeight: 600 }}>Canopy</span>
          </a>
        </div>
        <div
          css={{
            marginTop: '36px',
            [aboveBreakpoint.md]: {
              marginTop: '60px',
            },
          }}
        >
          <Contact />
        </div>
      </div>
      <Footer />
    </PageContainer>
  )
}
