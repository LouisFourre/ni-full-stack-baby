import { useEffect, useState } from "react";
import { Button, Checkbox } from "@mui/material";
import { useTheme } from '@mui/material/styles';

const COLORS = ['#fde047', '#a3e635', '#60a5fa', '#ef4444'];

export default function Home() {
    const [questionrep, setQuestion] = useState(undefined);
    const [showDescription, setShowDescription] = useState(false);
    const [showFelicitation, setShowFelicitation] = useState(false);

    const theme = useTheme();

    const verifyresponse = (response) => {
        console.log(response, questionrep.bonneReponse)
        if (response == questionrep.bonneReponse) {
            setShowFelicitation(true);
            setShowDescription(true); // Clear showDescription
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
        let listereponse = [json.bonneReponse, json.reponse1, json.reponse2, json.reponse3];

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

    useEffect(() => {
        questinreponse();
    }, []);

    return (
        <div className="flex flex-col items-center">
            <h3>{questionrep?.question}</h3>
            <div className="grid grid-cols-[1fr_1fr] gap-5 px-96 h-1/2 w-full">
            {
                questionrep?.listereponse.map((reponse, index) => {
                    return <Button
                    key={index}
                    onClick={(e) => verifyresponse(reponse)}
                    className="aspect-video"
                    style={{
                        backgroundColor: COLORS[index],
                        marginBottom: "10px",
                        color: "white",
                        fontSize: '1.2em',
                        fontWeight: 'bold'
                    }}
                    >
                        {reponse}
                    </Button>
                })
            }
            </div>
            
            {showDescription && <p style={{ color: showFelicitation ? "green" : "red" }}>{(showFelicitation ? '✔' : '❌') + ' ' + questionrep?.description}</p>}

            <Button
                onClick={() => questinreponse()}
                style={{
                    backgroundColor: theme.palette.green.main,
                    color: 'white',
                    fontWeight: 'bold',
                }}
            >
                Question suivante
            </Button>
        </div>
    );
}
