import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { sqlite3Worker1Promiser, Promiser } from "@sqlite.org/sqlite-wasm";

async function create(): Promise<Promiser> {
  const promiser = await new Promise<Promiser>((resolve) => {
    const _promiser = sqlite3Worker1Promiser({
      onready: () => resolve(_promiser),
    });
  });

  await promiser("open", {
    // or ":memory" ?? opfs does not work as we cannot instruct github to
    // send the necessary headers and also we don't need the database to be
    // persistent anyways
    filename: "",
  });

  return promiser;
}

// just import sqlite and do sth with it
create().then((db) => console.log(db));

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
