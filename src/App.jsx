import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import { MenuBar } from "./components/menubar/MenuBar";
import { Panel } from "./components/panel/Panel";
import { Container } from "./components/container/Container";
import { CodeSpaceV1 } from "./components/codespace/CodeSpace";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    setGreetMsg(await invoke("greet", { name }));
  }

  const menuElements = [
    {
      title: 'File',
      childs : [
        {
          title: 'New',
          function: null,          
        },
        {
          title: 'Save',
          function: null,
        }
      ]
    },
    {
      title: 'Edit',
      childs: []
    },
    {
      title: 'Help',
      childs: []
    }
  ]

  return (
    <div>
      <MenuBar elements={menuElements} />
      <Container config={{ width: '100%', height: '100%' }}>
        <Panel type='row'>
          <Container config={{width: '100%', height: '100%'}}>
            <Panel type='column'>
              <CodeSpaceV1 />
            </Panel>
          </Container>
        </Panel>
      </Container>
    </div>
  );
}

export default App;
