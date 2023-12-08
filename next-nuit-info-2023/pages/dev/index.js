import { useState } from "react";
import ExempleComposant from "@/components/miscellaneous/Exemple";
import { Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function Home() {
    const [time, setTime] = useState(0);
    const couleur = useTheme();
    const fetchTime = async () => {
        const res = await fetch('/api/time');
        const json = await res.json();
        setTime(json.time);
    };
    
    return (
        <>
            <div variant="contained" style={{ backgroundColor: couleur.primary }} className="flex items-center justify-center">
                <h1>Next.js</h1>
            </div>
            <Button variant="contained" color="darktheme" onClick={() => fetchTime()}>API</Button>
            <div>{ time }</div>
        </>
    )
}