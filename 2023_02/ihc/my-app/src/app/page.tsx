"use client"; // This is a client component 👈🏽
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function MyApp() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleClick() {
    setCount(count + 1);
  }

  function MyButton({ count, onClick, variant }: any) {
    return (
      <Button onClick={onClick} variant={variant}>
        Clicado {count} Vezes
      </Button>
    );
  }

  return (
    <div>
      <h1>Contadores Atualizando Juntos</h1>
      <MyButton count={count} onClick={handleClick} variant={"contained"} />
      <MyButton count={count} onClick={handleClick} variant={"outlined"} />
      <div>Contador da div {count}</div>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="outlined"
        defaultValue="Hello World"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div>Reagindo ao campo de texto: {text}</div>
    </div>
  );
}
