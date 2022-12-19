// import Head from 'next/head'
import React from 'react'
import Script from 'next/script'

function Metadata({title}) {
  return (
    <>
      <title>{title}</title>
      <link rel="shortcut icon" href="/images/logo.png" />
      <meta name="description" content="//TODO INIT description" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <meta property="og:url" content="https:////TODO INIT url" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="//TODO INIT project name" />
      <meta property="og:description" content="//TODO INIT description" />
      <meta
        property="og:image"
        content="https:////TODO INIT url/images/banner.jpg"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="//TODO INIT url" />
      <meta property="twitter:url" content="https:////TODO INIT url" />
      <meta name="twitter:title" content="//TODO INIT project name" />
      <meta name="twitter:description" content="//TODO INIT description" />
      <meta
        name="twitter:image"
        content="https:////TODO INIT url/images/banner.jpg"
      />

      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      ></Script>
      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
    </>
  )
}

export default Metadata
