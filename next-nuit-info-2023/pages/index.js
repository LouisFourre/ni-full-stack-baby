import React from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import Container from "@mui/material/Container";

export default function Home() {
    return (
        <>
            <Element name="accueil" className="element">
                <Container
                    className="flex flex-col items-center"
                >
                    <h1>Le réseau Action Climat</h1>

                    <img src="climat.png" alt="climat" />

                    <h3>
                        Réseau Action Climat, c’est l’ONG qui veut vous former pour lutter
                        contre le réchauffement climatique. Pour cela rien de plus simple que
                        notre site pour apprendre, que ce soit en jouant à notre mini jeu ou
                        avec notre page d’apprentissage !
                    </h3>
                </Container>
            </Element>
        </>
    );
}
