import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(){
  return(
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="shortcut icon" href="favicon.svg" type="image/svg" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <title>NLW - COPA</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}