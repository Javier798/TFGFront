import React, { useEffect } from "react";
import styles from "./perfil.module.css";

function Perfil(props) {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        async function fetchData() {


            setData(props.userData);

            setLoading(false);

        }
        fetchData();

    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }


    return (

        <div className={styles.superior}>
                <div className={styles.usuario}>
                    <div style={{ backgroundImage: "url(" + process.env.REACT_APP_ICONO + data.profileIconId + ".png)" }} className={styles.imgUsuario}>
                        <p id="nivel">{data.summonerLevel}</p>
                    </div>
                    <div className={styles.nombreUsuario}>
                        <h1>{data.name}</h1>
                    </div>
                </div>
                <div className={styles.buscador}>
                    <form className={styles.formulario} onSubmit={redirigir} role="search">
                        <label className={styles.etiqueta} htmlFor="search">Search for stuff</label>
                        <input id="search" className={styles.search} type="search" placeholder="Search..." autoFocus required />
                        <button className={styles.boton} type="submit">Go</button>
                    </form>
                </div>

                <div id="login">
                    <a className={styles.inicioSesion} href="">Iniciar sesion</a>

                </div>
            </div>
    );
    function redirigir(event) {
        event.preventDefault();
        window.location.href = "/usuario/" + document.getElementById("search").value;
    }
}

export default Perfil;
