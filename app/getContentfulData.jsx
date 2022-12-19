export async function getContentfulData(entryId, spaceId, accessToken) {
  const contentful = require('contentful')
  const client = contentful.createClient({
    space: spaceId,
    accessToken: accessToken
  })

  console.log({entryId})

  // const fr = await client
  //   .getEntry(entryId, {include: 3, locale: 'fr'})
  //   .then((entry) => entry.fields)
  //   .catch(console.error)

  const en = await client
    .getEntry(entryId, {
      include: 3,
      locale: 'en-US'
    })
    .then((entry) => entry.fields)
    .catch(console.error)

  return {
    en
  }
}
