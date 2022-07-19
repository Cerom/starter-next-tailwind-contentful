import Metadata from "../components/Metadata";

export default function Home({ listData }) {
  console.log({ listData });
  return (
    <main>
      <Metadata title="Next + Tailwind starter" />
      Next + Tailwind <i>starter</i>
    </main>
  );
}

export async function getStaticProps({ preview = false }) {
  const safeStringify = require("fast-safe-stringify");
  const contentful = require("contentful");
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  let listData = null;

  await client
    .getEntry("76zi4yw46GETZ7dVvJXzte", { include: 3 })
    .then(
      (entry) =>
        (listData = entry.fields.clients.map((e) =>
          JSON.parse(safeStringify(e.fields))
        ))
    )
    .catch(console.error);

  return {
    props: { listData },
  };
}
