import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Link from 'next/link'

export default function Home() {
  const [promptInput, setPrompt] = useState("");
  const [result, setResult] = useState("");


  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/image_Generator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: promptInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setPrompt("");
  };

  return (
    <div>
      <Head>
        <title>Image Generator</title>
        <link rel="icon" href="/image_logo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/image_logo.png" className={styles.icon} />
        <h3>Image Generator</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Ej. clown fish"
            value={promptInput}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <input type="submit" value="Generate image" />
        </form>
        <br></br>
        <img className="result-image" src={result} />
        <br></br>
      </main>
    </div>
  );

}