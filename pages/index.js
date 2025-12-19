import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Barok Group</title>
        <meta name="description" content="Barok Group website" />
      </Head>

      <main style={{ padding: 24 }}>
        <h1>Welcome</h1>
        <p>Site is deploying correctly on Vercel.</p>
      </main>
    </>
  );
}
