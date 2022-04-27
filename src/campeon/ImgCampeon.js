import React, { useEffect } from "react";
import styles from "./ImgCampeon.module.css";

function ImgCampeon(props) {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        async function fetchData() {
            let summonername = "FlyingGecko048";

            
            
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
                <img src={process.env.REACT_APP_SPLASH+"Aatrox_0.jpg"} alt=""/>
                <img src={process.env.REACT_APP_SPLASH+"Aatrox_0.jpg"} alt=""/>

            </div>
            <div className={styles.informacion}>
                <h1 className={styles.nombreCampeon}>Aatrox</h1>
                <div className={styles.info}>
                    <div className={styles.izquierda}>
                        <div className={styles.rol}>
                            <h2>Tanque</h2>
                        </div>
                        <div className={styles.dificultad}>
                            <h2>Dificil</h2>
                        </div>
                    </div>
                    <div className={styles.derecha}>
                        <p className={styles.lore}>Fiora, la duelista más temida de Valoran, ha alcanzado renombre por su estilo
                            brusco y su mente astuta, así como por la velocidad de su estoque. Fiora nació en el seno de
                            la Casa Laurent, en el reino de Demacia, y asumió el control de la familia a raíz de un
                            escándalo que casi acaba con ellos. La reputación de la Casa Laurent se hundió, pero Fiora
                            empeñó todos sus esfuerzos en restablecer el honor de su familia y devolverla al lugar que
                            le correspondía entre las mejores de Demacia. </p>
                    </div>
                </div>
            </div>
        </div>

        
    );
}

export default ImgCampeon;