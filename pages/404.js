import Link from 'next/link'
import Head from "next/head";
import styles from "./index.module.css";

export default function notfounded() {
    return <>
        <Head>
            <title>ERROR 404</title>
            <link rel="icon" href="/404image.png" />
        </Head>
        <main className={styles.main}>
            <h1>404 - PAGE NOT FOUND</h1>
            <p>NO FUNCIONA PERO... TE DEJO ESTA MEME QUE TE ALEGRARÁ EL DÍA</p>
            <img src = "/meme.jpg" className={styles.main} />
        </main>
    </>
}