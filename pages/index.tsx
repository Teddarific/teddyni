import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { PageContainer } from '../components/PageContainer'

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
        <div>{`👋 Hey there, I'm`}</div>
        <div
          css={{
            fontSize: '48px',
            fontWeight: 700,
            '-webkit-text-stroke': 1,
            '-webkit-text-stroke-color': 'rgba(0, 0, 0, .9)',
            color: 'rgba(0, 0, 0, .72)',
          }}
        >
          TEDDY NI
        </div>
        <hr css={{ width: '100%', margin: '16px 0' }} />
        <div>
          Currently an engineer @
          <a href="https://heycanopy.com" css={{ textDecoration: 'none' }}>
            <span css={{ color: '#377acc', fontWeight: 600 }}>Canopy</span>
          </a>
        </div>
        <div css={{ marginTop: '36px' }}>
          <Contact />
        </div>
      </div>
      <Footer />
    </PageContainer>
  )
}
