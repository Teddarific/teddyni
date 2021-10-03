import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        css={{
          margin: 0,
          padding: 0,
          fontFamily: 'Montserrat',
          fontSize: '16px',
        }}
        lang="en"
      >
        <Head>
          <title>Teddy Ni</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          css={{
            margin: 0,
            padding: 0,
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
