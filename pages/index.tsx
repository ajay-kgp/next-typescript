import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next and TypeScript</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Exploring Ant Design and ag-grid
        </h1>
      </main>
      
    </div>
  )
}

export default Home
