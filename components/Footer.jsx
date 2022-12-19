import React from 'react'

function Footer({data}) {
  return (
    <footer className="relative flex w-screen flex-col-reverse items-center justify-between gap-16 bg-black py-16 px-8 text-white md:flex-row md:gap-2">
      <div className="flex w-full items-center gap-4">
        <img className="w-24" src="images/logo-white.svg" alt="logo" />|
        <div className="">
          © {new Date().getFullYear()} TODO - website by{' '}
          <a href="https://pecorino.studio" target="_blank" rel="noreferrer">
            Pecorino Studio
          </a>
        </div>
      </div>
      <div className="flex gap-4 invert">
        {data.listSocials?.map((e, i) => {
          return (
            <a
              key={i + '-' + e.fields.name}
              href={e.fields.url}
              target="_blank"
              rel="noreferrer"
              className="flex h-6 w-6 items-center"
            >
              <img
                className="w-6"
                src={e.fields.logo.fields.file.url}
                alt={e.fields.name}
              />
            </a>
          )
        })}
      </div>
    </footer>
  )
}

export default Footer
