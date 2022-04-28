import React, { useEffect } from "react";
import styles from "./Habilidades.module.css";

function Habilidades(props) {
    const [champion, setChampion] = React.useState();
    const [habilidades, setHabilidades] = React.useState();
    const [passive, setPassive] = React.useState();
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        async function fetchData() {
            let summonername = "FlyingGecko048";
            let response = await fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonername + "?api_key=" + process.env.REACT_APP_APIKEY);
            let userData = await response.json();
            setChampion(props.champion);
            response = await fetch("http://localhost/TFG/blitz/proyecto/public/jsonreader/266/spells");
            let habilidades = await response.json();
            setHabilidades(habilidades);
            response = await fetch("http://localhost/TFG/blitz/proyecto/public/jsonreader/266/passive");
            let pasiva = await response.json();
            setPassive(pasiva);
            setLoading(false);

        }
        fetchData();

    }, []);


    if (loading) {
        return (
            <div className={styles.habilidades}>
                <h1 className={styles.nomHabilidades}>Habilidades</h1>
                <div className={styles.conteidoHabilidades}>
                    <div className={styles.izquierdaHabilidades}>
                        <div className={styles.imgHabilidades}>
                        </div>
                        <div className={styles.descHabilidades}>
                           
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }


    return (
        <div className={styles.habilidades}>
            <h1 className={styles.nomHabilidades}>Habilidades</h1>
            <div className={styles.conteidoHabilidades}>
                <div className={styles.izquierdaHabilidades}>
                    <div className={styles.imgHabilidades}>
                        <img src={process.env.REACT_APP_PASSIVE+seleccsionarHabilidad(0)+".png"} onClick={cambiarVideoPassiva} id="0" alt="" />
                        <img src={process.env.REACT_APP_SPELL+seleccsionarHabilidad(1)+".png"} onClick={cambiarVideoHabilidades} id="1" alt="" />
                        <img src={process.env.REACT_APP_SPELL+seleccsionarHabilidad(2)+".png"} onClick={cambiarVideoHabilidades} id="2" alt="" />
                        <img src={process.env.REACT_APP_SPELL+seleccsionarHabilidad(3)+".png"} onClick={cambiarVideoHabilidades} id="3" alt="" />
                        <img src={process.env.REACT_APP_SPELL+seleccsionarHabilidad(4)+".png"} onClick={cambiarVideoHabilidades} id="4" alt="" />
                    </div>
                    <div className={styles.descHabilidades}>
                        <p>{passive.description}</p>
                    </div>
                </div>
                <video className={styles.videoHabilidades} controls src={process.env.REACT_APP_HABILIDADES + "AatroxE.webm"}></video>
            </div>
        </div>
    );
    function cambiarVideoHabilidades(item) {
        let imagenes = item.target.parentElement;
        for (let j = 0; j < imagenes.children.length; j++) {
            if(imagenes.children[j].style.transform!=""){
                imagenes.children[j].style.transform = "translateY(0)";
                imagenes.children[j].style.transform="";
            }
            
        }
        item.target.style.transform = "translateY(-5rem)";
        item.target.parentElement.parentElement.children[1].children[0].innerHTML = habilidades[imagenes.children[item.target.id].id - 1].description;
        let video = item.target.parentElement.parentElement.parentElement.children[1];
        video.src = process.env.REACT_APP_HABILIDADES + seleccsionarHabilidad(imagenes.children[item.target.id].id) + ".webm";
    }
    function cambiarVideoPassiva(item) {
        let imagenes = item.target.parentElement;
        for (let j = 0; j < imagenes.children.length; j++) {
            if(imagenes.children[j].style.transform!=""){
                imagenes.children[j].style.transform = "translateY(0)";
                imagenes.children[j].style.transform="";
            }
            
        }
        item.target.style.transform = "translateY(-5rem)";
        item.target.parentElement.parentElement.children[1].children[0].innerHTML = passive.description;
        let video = item.target.parentElement.parentElement.parentElement.children[1];
        video.src = process.env.REACT_APP_HABILIDADES + seleccsionarHabilidad(imagenes.children[item.target.id].id) + ".webm";
    }
    function seleccsionarHabilidad(id) {
        id += "";
        switch (id) {
            case "0":
                return champion.image.full.split(".")[0] + "P";
            case "1":
                return champion.image.full.split(".")[0] + "Q"
            case "2":
                return champion.image.full.split(".")[0] + "W"
            case "3":
                return champion.image.full.split(".")[0] + "E"
            case "4":
                return champion.image.full.split(".")[0] + "R"

            default:
                break;
        }
    }
}

export default Habilidades;