import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { MenuBar } from "./components/menubar/MenuBar";
import { Panel } from "./components/panel/Panel";
import { Container } from "./components/container/Container";

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
      <Container config={{ width: '100%', height: '100%' }}>
        <Panel type='row'>
          <Container config={{width: '10%', height: '100%'}}>
            <Panel type='column'>
              Menu Lateral
            </Panel>
          </Container>
          <Container config={{width: '100%', height: '100%'}}>
            <Panel type='column'>
              Display Area
            </Panel>
          </Container>
        </Panel>
      </Container>
    </div>
  );
}

export default App;
