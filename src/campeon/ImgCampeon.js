import React, { useEffect } from "react";
import styles from "./ImgCampeon.module.css";

function ImgCampeon(props) {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [champion, setChampion] = React.useState(true);
    React.useEffect(() => {
        async function fetchData() {
            let summonername = "FlyingGecko048";

            setChampion(props.campeon);
            
            setLoading(false);
            
        }
        fetchData();

    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }


    return (
        <div className={styles.imagen}>
            <div className={styles.imgCampeon}>
                <img src={process.env.REACT_APP_SPLASH+champion.id+"_0.jpg"} alt=""/>
                <img src={process.env.REACT_APP_SPLASH+champion.id+"_0.jpg"} alt=""/>

            </div>
            <div className={styles.informacion}>
                <h1 className={styles.nombreCampeon}>{champion.id}</h1>
                <div className={styles.info}>
                    <div className={styles.izquierda}>
                        <div className={styles.rol}>
                            <h2>{traduccion(champion.tags[0])}</h2>
                        </div>
                        <div className={styles.dificultad}>
                            <h2>{clacularDificultad(champion.info.difficulty)}</h2>
                        </div>
                    </div>
                    <div className={styles.derecha}>
                        <p className={styles.lore}>{champion.lore}</p>
                    </div>
                </div>
            </div>
        </div>

        
    );
    function clacularDificultad(dificultad) { 
        if(dificultad>0 && dificultad<=4){
            return "Fácil";
        }else if(dificultad>4 && dificultad<=7){
            return "Normal";
        }
        else if(dificultad>7 && dificultad<=10){
            return "Difícil";
        }
     }
     
function traduccion(tag) {
    switch (tag) {
        case "Fighter":
            return "Luchador";
        case "Mage":
            return "Mago";
        case "Tank":
            return "Tanque";
        case "Assassin":
            return "Asesino";
        case "Support":
            return "Apoyo";
        case "Marksman":
            return "Tirador";
    }
}

}

export default ImgCampeon;