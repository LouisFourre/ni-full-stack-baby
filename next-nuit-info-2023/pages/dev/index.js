import { useState } from "react";
import ExempleComposant from "@/components/miscellaneous/Exemple";
import { Button } from "@mui/material";

export default function Home() {
    
    
    return (
        <>
            <ExempleComposant />
            <Button variant="contained" color="ochre" onClick={() => fetchTime()}>API</Button>
            <div>{ time }</div>
        </>
    )
}