import { useState } from "react";
import { Button } from "@mui/material";
import TableauCours from "@/components/miscellaneous/TableauCours";
import Footer from "@/components/miscellaneous/Footer";

export default function Home() {    
    return (
        <>
            <TableauCours />
            <Button variant="contained" color="ochre" onClick={() => fetchTime()}>API</Button>
            <Footer/>
        </>
    )
}