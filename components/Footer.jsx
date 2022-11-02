import React from 'react'

function Footer({data}) {
  return (
    <div className="relative flex md:flex-row flex-col-reverse gap-16 md:gap-2 justify-between items-center bg-black w-screen py-16 px-8 text-white">
      <div className="flex items-center gap-4">
        <img className="w-24" src="images/logo-white.svg" alt="logo" />|
        <p>
          © {new Date().getFullYear()} WEBSITE - design & development by{' '}
          <a href="https://pecorino.studio" target="_blank" rel="noreferrer">
            Pecorino Studio
          </a>
        </p>
      </div>
      <div className="flex gap-4 invert">
        {data.listSocials.map((e, i) => {
          return (
            <a
              key={i + '-' + e.fields.name}
              href={e.fields.url}
              target="_blank"
              rel="noreferrer"
              className="w-6 h-6"
            >
              <img
                className="w-8"
                src={e.fields.logo.fields.file.url}
                alt={e.fields.name}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Footer
