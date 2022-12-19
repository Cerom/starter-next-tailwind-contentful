import '../styles/globals.scss'
import React, {use} from 'react'
import localFont from '@next/font/local'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {getContentfulData} from './getContentfulData'

// const myFont = localFont({
//   src: [
//     {
//       path: './Roboto-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//       variable: '--font-roboto'
//     },
//     {
//       path: './Roboto-Italic.woff2',
//       weight: '400',
//       style: 'italic',
//       variable: '--font-roboto'
//     }
//   ]
// })

export default function RootLayout({children}) {
  let data = use(
    getContentfulData(
      '2FDJUAB65d3Ylu22ZCDAzi',
      process.env.CONTENTFUL_SPACE_ID,
      process.env.CONTENTFUL_ACCESS_TOKEN
    )
  )

  return (
    <html
      lang="en"
      //className={myFont.className}
    >
      <body>
        <Navbar data={data} />
        {children}
        <Footer data={data} />
      </body>
    </html>
  )
}
