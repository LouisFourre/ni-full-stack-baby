import { useState } from "react";
import ExempleComposant from "@/components/miscellaneous/Exemple";
import NavBar from "@/components/miscellaneous/NavBar";
import { Button } from "@mui/joy";

export default function Home() {
  const [time, setTime] = useState(0);

  const fetchTime = async () => {
    const res = await fetch("/api/time");
    const json = await res.json();
    setTime(json.time);
  };

  return (
    <>
      <NavBar />
    </>
  );
}
