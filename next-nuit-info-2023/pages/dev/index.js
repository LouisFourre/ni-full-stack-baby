import React from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const sectionStyle = {
  textAlign: "center",
  paddingTop: "80px",
  paddingBottom: "80px",
  borderBottom: "1px solid #ddd",
};

export default function Home() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Element name="accueil" className="element">
        <h1>Le réseau Action Climat</h1>
        <Container
          style={{
            ...sectionStyle,
            backgroundImage: `url('climat.png')`,
          }}
          className="bg-contain bg-center bg-no-repeat"
        >
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
