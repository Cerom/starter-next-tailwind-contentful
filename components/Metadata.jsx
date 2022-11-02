import Head from 'next/head'
import React from 'react'
import Script from 'next/script'

function Metadata({title}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/images/logo.png" />
        <meta name="description" content="EPLEM drinks official website" />

        <meta property="og:url" content="https://eplem.co" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EPLEM drinks" />
        <meta
          property="og:description"
          content="EPLEM drinks official website"
        />
        <meta
          property="og:image"
          content="https://eplem.co/images/banner.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="eplem.co" />
        <meta property="twitter:url" content="https://eplem.co" />
        <meta name="twitter:title" content="EPLEM drinks" />
        <meta
          name="twitter:description"
          content="EPLEM drinks official website"
        />
        <meta
          name="twitter:image"
          content="https://eplem.co/images/banner.jpg"
        />
      </Head>
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
