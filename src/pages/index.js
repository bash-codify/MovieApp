import LangeNavLinks from '@/Components/LargeNavLinks'
import Log_Sign from '@/Components/Register'
import MoviesStudio from '@/Components/MoviesStudio'

import Head from 'next/head'


export default function Home() {
  return (
    <>
    <Head>
      <title>MoviesStudio</title>
        <meta name="description" content="A movies Website generated with TMDB Api" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

      <main>
          <MoviesStudio/>
      </main>
    </>
  )
}
