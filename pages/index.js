import Link from 'next/link'
import Head from "next/head";
import styles from "./index.module.css";

function Home() {

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/homelogo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/homelogo.png" className={styles.icon} />
        <h2>Home</h2>
        <h3>Choose where to go</h3>
        <img src="/dog.png" className={styles.icon} />
        <h4><Link href="/pet"> Pet name generator </Link></h4>
        <br></br>
        <img src="/cam.png" className={styles.icon} />
        <h4><Link href="/image">Image Generator</Link></h4>
        <br></br>
      </main>
    </div>
  )
}

export default Home