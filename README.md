This is a [`Next.js 12`](https://nextjs.org/) project loaded with [`Tailwind CSS`](https://tailwindcss.com/) and [`Contentful headless CMS`](https://www.contentful.com/).

# What's included

## Custom hooks

- **useWindowSize** : outputs {windowSize:{width, height}}
- **useScrollProgress** : input a parent section {ref} and outputs {scrollProgress, isNavBig, isScrolled100vh}

## SectionMachine.jsx

- Synced with Contentful to render the Sections list on the PAGE content

## Context.jsx

- `{locale}` initialized with the browser's language ("fr" or "en-US")

## Metadata.jsx

- Import it on every /page files to set the page's metadata

<br/>

# Getting Started

## 🤖 Install Contentful CLI

- Run **`brew install contentful-cli`**
- Run **`contentful login`** and follow instructions
- Run **`contentful login`** again and keep your `content managment token`

## 🗂 Init Contentful headless CMS

- Clone [starter-next-tailwind-contentful](https://github.com/cerom/starter-next-tailwind-contentful) repo
- Create a new Contentful organization and a space inside it
- Go to _Settings > Locales_ and change space default locale to _fr_ and add _en-US_ as a second one
- Go to _Settings > General_ settings & copy Space ID
- In your terminal, cd in **utils/contentful-export-import** folder
- Open **config_import.json** and paste it here : `"spaceId": "XXX"`
- Open **config_import.json** and paste your `content managment token` here : `"managementToken": "XXX"`
- Save & close
- Run `contentful space import --config ./config_import.json`
- Go to _Settings > API keys_ and create a new API key
- Copy the `Content Delivery API - access token`

## ✨ Init Front end

- Create a `.env.local` file in project root
  - Sample file structure :<br/><br/>
    `NEXT_PUBLIC_GOOGLE_ANALYTICS=xxx`<br/>
    `CONTENTFUL_ACCESS_TOKEN=paste access token here`<br/>
    `CONTENTFUL_SPACE_ID=paste space id here`<br/>
    `CONTENTFUL_HOMEPAGECONTENT_ID=paste 'Website name' content id here`<br/>
- Search for //TODO INIT in the code to see where you need to add your own content.
- `npm i` & `npm start`

## Credits

[`Pecorino Studio`](https://www.pecorino.studio/)

[`La Guilde`](https://www.laguilde.io/)
