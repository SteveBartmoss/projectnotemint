import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { MenuBar } from "./components/menubar/MenuBar";
import { Panel } from "./components/panel/Panel";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div>
      <MenuBar />
      <Panel type='row'>
        <Panel type='column'>
          Menu Lateral
        </Panel>
        <Panel type='column'>
          Display Area
        </Panel>
      </Panel>
    </div>
  );
}

export default App;
