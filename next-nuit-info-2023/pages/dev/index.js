import React from "react";
import NavBar from "@/components/miscellaneous/NavBar";
import { Element, animateScroll as scroll } from "react-scroll";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Sticky from "react-sticky-el";

const sectionStyle = {
  textAlign: "center",
  paddingTop: "80px",
  paddingBottom: "80px",
  borderBottom: "1px solid #ddd",
  backgroundSize: "cover", // Ajout de la propriété backgroundSize
};

export default function Home() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Sticky>
        <NavBar />
      </Sticky>
      <Element name="accueil" className="element">
        <Container
          style={{
            ...sectionStyle,
            backgroundImage: `url('climat.jpg') `,
          }}>
          <Typography variant="h2">LE RÉSEAU ACTION CLIMAT</Typography>
          Réseau Action Climat, c’est l’ONG qui veut vous former pour lutter
          contre le réchauffement climatique. Pour cela rien de plus simple que
          notre site pour apprendre, que ce soit en jouant à notre mini jeu ou
          avec notre page d’apprentissage !
        </Container>
      </Element>
    </>
  );
}
