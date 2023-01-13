# Informe práctica NextJS, React, REST and Netlify
  
**ÍNDICE**
1. [Generador de nombres](#indice1)
2. [Generador de imágenes](#indice2)
3. [404.js](#indice3)
4. [REST exercises](#indice4)

***
## Generador de nombres <a name="indice1"></a>
El código necesario para generar nombres se implementa en el index.js y en el pet.js:

```js
//pet.js
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
  }
  return (
    <div>
      <Head>
        <title>Put a name to my pet</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <img src="/dog.png" className={styles.icon} />
        <h3>Name my pet</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an animal"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Generate names" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
```

```js
// index.js
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
```

Con esto ya funciona por lo que desplegamos la página en netlify y vercel
![img](./pages/public/netlify.png)
![img](./pages/public/vercel.png)
![img](./pages/public/names.png)

## Generador de imágenes <a name="indice2"></a>
Para el generador de imágenes se crea en la carpeta /pages/api/ otro fichero para acceder a la generación de imágenes llamado generate.js Para hacer la petición a la API de OpenAI y escribir con POST a espera de una respuesta necesitamos este código en /pages/api/image.js:

```js
import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Link from 'next/link'

export default function Home() {
  const [promptInput, setPrompt] = useState("");
  const [result, setResult] = useState("");


  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generateImage", {
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
        <link rel="icon" href="/cam.png" />
      </Head>

      <main className={styles.main}>
        <img src="/cam.png" className={styles.icon} />
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
```
Se debe cambiar el index.js para que nos pueda solicitar la imágen que solicita el cliente y se imprime por pantalla. Una vez hecho esto se despliega en netlify y vercel y se obtiene lo siguiente:

![img](./pages/public/imagenes.png)

## 404.js <a name="indice3"></a>

Se crea una un código 404 en /pages/404.js:

```js
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
```

## REST exercise <a name="indice4"></a>

1. Modelos

![img](./pages/public/ej1.png)

2. Información modelos

![img](./pages/public/ej2.png)

3. Generador de imagenes

![img](./pages/public/ej3.png)
![img](./pages/public/castor.png)

4. Completar imágenes

![img](./pages/public/ej4.png)

5. Moderación 

![img](./pages/public/ej5.png)