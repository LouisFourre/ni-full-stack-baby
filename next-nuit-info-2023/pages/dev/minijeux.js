import { useState } from "react";
import ExempleComposant from "@/components/miscellaneous/Exemple";
import { Button, Checkbox } from "@mui/joy";
import { Typography } from "@mui/joy";

export default function Home() {
    const [questionrep, setQuestion] = useState(undefined);
    const [showDescription, setShowDescription] = useState(false);
    const [showFelicitation, setShowFelicitation] = useState(false);

    const verifyresponse = (response) => {
        console.log(response);
        if (response === questionrep.br) {
            setShowFelicitation(true);
            setShowDescription(false); // Clear showDescription
            return true;
        } else {
            setShowFelicitation(false); // Clear showFelicitation
            setShowDescription(true);
            return false;
        }
    }
    const questinreponse = async () => {
        const res = await fetch('/api/quiz');
        const json = await res.json();
        let listereponse = [json.br, json.r1, json.r2, json.r3];

        json.listereponse = shuffle(listereponse);
        
        setQuestion(json);
        setShowDescription(false);
        setShowFelicitation(false);
    }

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    return (
        <>
            
            <Button
                id="id"
                onClick={() => questinreponse()}
                style={{
                    width: "100%",
                    height: "120px",
                    backgroundColor: "#c79f96",
                    marginBottom: "10px",
                    border: "1px solid black",
                    fontSize: "30px"
                }}
            >
                Question suivante
            </Button>
            {questionrep && <>
                

                <div style={{ position: "relative", top: 0, right: 0 }}>
                <div
                    style={{width: "70%", marginLeft: "15%", height: "100px", backgroundColor: "purple", marginBottom: "10px", border: "1px solid black", fontSize: "30px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "10px", color: "black" }}
                >
                    {questionrep?.q}
                </div>

            </div>





            <div style={{ position: "relative", top: 0, right: 0 }}>
                <Button
                    onClick={(e) => verifyresponse(e.target.innerText)}
                    style={{ marginLeft: "25%", width: "50%", height: "80px", backgroundColor: "#e5e7eb", marginBottom: "10px", border: "1px solid black", fontSize: "20px", color: "black" }}
                >
                    {(questionrep.listereponse ?? "")[0]}
                </Button>

            </div>
            <div style={{ position: "relative", top: 0, right: 0 }}>
                <Button
                    onClick={(e) => verifyresponse(e.target.innerText)}
                    style={{ marginLeft: "25%", width: "50%", height: "80px", backgroundColor: "#e5e7eb", marginBottom: "10px", border: "1px solid black", fontSize: "20px", color: "black" }}
                >
                    {(questionrep.listereponse ?? "")[1]}
                </Button>
            </div>
            <div style={{ position: "relative", top: 0, right: 0 }}>
                <Button
                    onClick={(e) => verifyresponse(e.target.innerText)}
                    style={{ marginLeft: "25%", width: "50%", height: "80px", backgroundColor: "#e5e7eb", marginBottom: "10px", border: "1px solid black", fontSize: "20px", color: "black" }}
                >
                    {(questionrep.listereponse ?? "")[2]}
                </Button>
            </div>

            <div style={{ position: "relative", top: 0, right: 0 }}>
                <Button
                    onClick={(e) => verifyresponse(e.target.innerText)}
                    style={{marginLeft: "25%", width: "50%", height: "100px", backgroundColor: "#e5e7eb", marginBottom: "10px", border: "1px solid black", fontSize: "20px", color: "black" }}
                >
                    {(questionrep.listereponse ?? "")[3]}
                </Button>
            </div>

            {/* <Button onClick={(e) => verifyresponse(e.target.innerText)} >{(questionrep.listereponse ?? '')[1]}</Button>
            <Button onClick={(e) => verifyresponse(e.target.innerText)} >{(questionrep.listereponse ?? '')[2]}</Button>
            <Button onClick={(e) => verifyresponse(e.target.innerText)} >{(questionrep.listereponse ?? '')[3]}</Button> */}
            </>}
            
            {showDescription && <div style={{  position: "relative", top: 0, right: 0,marginLeft : "5%", width: "90%", height: "100px", backgroundColor: "red", marginBottom: "10px", border: "1px solid black", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }} >{questionrep.desc}</div>}
            {showFelicitation && <div style={{ position: "relative", top: 0, right: 0,marginLeft : "5%", width: "90%", backgroundColor: "green", marginBottom: "10px", border: "1px solid black", fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }} >Bravo</div>}
            
        </>
    );
}
