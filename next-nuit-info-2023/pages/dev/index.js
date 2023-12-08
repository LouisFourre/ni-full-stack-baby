import { useState } from "react";
import { Button } from "@mui/material";
import TableauCours from "@/components/miscellaneous/TableauCours";
import Footer from "@/components/miscellaneous/Footer";

export default function Home() {
    const setTheme = (theme) => {
        localStorage.setItem('theme', theme);
    }

    return (
        <>
            <TableauCours />
            <Button variant="contained" color="ochre" onClick={() => fetchTime()}>API</Button>
            <Button variant="contained" color="primary" onClick={() => setTheme('primary')}>Primary</Button>
            <Button variant="contained" color="secondary" onClick={() => setTheme('secondary')}>Secondary</Button>
        </>
    )
}