import { useState } from "react";
import ExempleComposant from "@/components/miscellaneous/Exemple";

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
            <button onClick={() => fetchTime()}>API</button>
            <div>{ time }</div>
        </>
    )
}