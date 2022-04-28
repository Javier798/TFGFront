import React, { useEffect } from "react";
import styles from "./Skins.module.css";

function Skins(props) {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [skins, setSkins] = React.useState(true);
    React.useEffect(() => {
        async function fetchData() {
            let summonername = "FlyingGecko048";
            let response = await fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonername + "?api_key=" + process.env.REACT_APP_APIKEY);
            let userData = await response.json();

            setData(userData);
            let skinsAux = [];
            for (let i = 0; i < props.campeon.skins.length; i++) {
                if (props.campeon.skins[i].name == "default") {
                    skinsAux.push([props.campeon.id + "_" + props.campeon.skins[i].num + ".jpg", props.campeon.id]);
                } else {
                    skinsAux.push([props.campeon.id + "_" + props.campeon.skins[i].num + ".jpg", props.campeon.skins[i].name]);
                }
            }
            setSkins(skinsAux);

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

                    {skins.map((value, key) => {
                        return (
                            <div key={key} className={styles.skin}>
                                <img src={process.env.REACT_APP_SPLASH + value[0]} alt="" />
                                <h3 className={styles.nomSkin}>{value[1]}</h3>
                            </div>
                        );
                    })}

                    {/* <div className={styles.skin}>
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
                    </div> */}
                </div>

            </div>
        </div>
    );
}

export default Skins;