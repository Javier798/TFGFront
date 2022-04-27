import React, { useEffect } from "react";
import styles from "./Skins.module.css";

function Habilidades(props) {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        async function fetchData() {
            let summonername = "FlyingGecko048";
            let response = await fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonername + "?api_key=" + process.env.REACT_APP_APIKEY);
            let userData = await response.json();
            setData(userData);


            setLoading(false);

        }
        fetchData();

    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }


    return (
        <div className={styles.sectionSkins}>
            <h2 className={styles.tituloSkins}>Aspectos</h2>
            <div className={styles.skins}>
                <img className={styles.fondo} src={process.env.REACT_APP_SPLASH + "Aatrox_1.jpg"} alt="" />
                <div className={styles.contenedorSkins}>
                    <div className={styles.skin}>
                        <img src={process.env.REACT_APP_TILES + "Aatrox_1.jpg"} alt="" />
                        <h3 className={styles.nomSkin}>Aatrox luna sangrienta</h3>
                    </div>
                    <div className={styles.skin}>
                        <img src={process.env.REACT_APP_TILES + "Aatrox_1.jpg"} alt="" />
                        <h3 className={styles.nomSkin}>Aatrox luna sangrienta</h3>
                    </div>
                    <div className={styles.skin}>
                        <img src={process.env.REACT_APP_TILES + "Aatrox_1.jpg"} alt="" />
                        <h3 className={styles.nomSkin}>Aatrox luna sangrienta</h3>
                    </div>
                    <div className={styles.skin}>
                        <img src={process.env.REACT_APP_TILES + "Aatrox_1.jpg"} alt="" />
                        <h3 className={styles.nomSkin}>Aatrox luna sangrienta</h3>
                    </div>
                    <div className={styles.skin}>
                        <img src={process.env.REACT_APP_TILES + "Aatrox_1.jpg"} alt="" />
                        <h3 className={styles.nomSkin}>Aatrox luna sangrienta</h3>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Habilidades;