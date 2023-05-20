import Footer from '@/Components/Footer';
import Header from '@/Components/Header'
import '@/styles/globals.css'
import Head from 'next/head';
import { AppProvider } from '@/context/useContext';


export default function App({ Component, pageProps }) {


  return (

  <>

    <AppProvider>
      <Head>
          <title>TMDBMoviesStudio</title>
          <meta name="description" content="A movies Website generated with TMDB Api" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <Component {...pageProps} />

      <Footer/>

      
    </AppProvider>


  </>

  )
}
