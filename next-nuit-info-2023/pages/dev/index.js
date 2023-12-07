import { useState } from "react";
import ExempleComposant from "@/components/miscellaneous/Exemple";
import { Button } from "@mui/material";

export default function Home() {
    const [time, setTime] = useState(0);

    const fetchTime = async () => {
        const res = await fetch('/api/time');
        const json = await res.json();
        setTime(json.time);
    };
    
    return (
        <>
            <ExempleComposant />
            <Button variant="contained" color="ochre" onClick={() => fetchTime()}>API</Button>
            <div>{ time }</div>
        </>
    )
}