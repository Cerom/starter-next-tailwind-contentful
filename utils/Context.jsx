'use client'
import React, {createContext, useEffect, useState} from 'react'

const Context = createContext({})

function ContextProvider({children}) {
  const [locale, setLocale] = useState('fr')

  useEffect(() => {
    console.log(window.navigator.language)
    if (window.navigator.language === 'en') {
      setLocale('en-US')
    } else {
      setLocale('fr')
    }
  }, [])

  return (
    <Context.Provider
      value={{
        locale,
        setLocale
      }}
    >
      {children}
    </Context.Provider>
  )
}

export {ContextProvider}
export default Context
