import React, { useEffect } from "react";
import styles from "./Habilidades.module.css";

function Habilidades(props) {
    const [champion, setChampion] = React.useState();
    const [habilidades, setHabilidades] = React.useState();
    const [passive, setPassive] = React.useState();
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        async function fetchData() {
            
            setChampion(props.champion);
            
            setHabilidades(props.champion.spells);
            
            setPassive(props.champion.passive);
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
                        <img src={process.env.REACT_APP_PASSIVE+passive.image.full} onClick={cambiarVideoPassiva} id="0" alt="" />
                        <img src={process.env.REACT_APP_SPELL+habilidades[0].image.full} onClick={cambiarVideoHabilidades} id="1" alt="" />
                        <img src={process.env.REACT_APP_SPELL+habilidades[1].image.full} onClick={cambiarVideoHabilidades} id="2" alt="" />
                        <img src={process.env.REACT_APP_SPELL+habilidades[2].image.full} onClick={cambiarVideoHabilidades} id="3" alt="" />
                        <img src={process.env.REACT_APP_SPELL+habilidades[3].image.full} onClick={cambiarVideoHabilidades} id="4" alt="" />
                    </div>
                    <div className={styles.descHabilidades}>
                        <p>{passive.description}</p>
                    </div>
                </div>
                {passive.image.video.split(".")[1]=="webm" ? <video className={styles.videoHabilidades} controls src={process.env.REACT_APP_HABILIDADES + passive.image.video}></video>: <img id="imageneHabilidades" className={styles.videoHabilidades} src={process.env.REACT_APP_HABILIDADES + passive.image.video}/>}
                
                
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
        video.src = process.env.REACT_APP_HABILIDADES + habilidades[item.target.id-1].image.video;
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
        video.src = process.env.REACT_APP_HABILIDADES + passive.image.video;
    }
}

export default Habilidades;