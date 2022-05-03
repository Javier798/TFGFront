import React, { useEffect } from "react";
import styles from "./perfil.module.css";
function Perfil(props) {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        async function fetchData() {
            
            window.addEventListener('click', function (e) {
                let menu = document.getElementById("menuHamburguesa");
        let acceso = document.getElementById("accesoHamburguesa");
                /*2. Si el div con id clickbox contiene a e. target*/
                if (!document.getElementById('menuHamburguesa').contains(e.target)&&document.getElementById('accesoHamburguesa').id!==e.target.id) {
                    console.log(e.target);
                    menu.style.display = "none";
                    acceso.style.display = "block";
                }
            })
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
            <img onClick={hamburguesa} id="accesoHamburguesa" className={styles.menu} src={process.env.REACT_APP_MENU}></img>
            <div id="menuHamburguesa" className={styles.menuHamburguesa}>
                <div className={styles.usuarioHamburgues}>
                    <div style={{ backgroundImage: "url(" + process.env.REACT_APP_ICONO + data.profileIconId + ".png)" }} className={styles.imgUsuarioHamburguesa}>
                        <p id="nivel">{data.summonerLevel}</p>
                    </div>
                    <div className={styles.nombreUsuarioHamburguesa}>
                        <h1 className={styles.nombreHamburguesa}>{data.name}</h1>
                    </div>
                </div>
                <div id="loginHamburguesa">
                    <a className={styles.inicioSesionHamburguesa} href="/campeones">Campeones</a>

                </div>
            </div>
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
                <a className={styles.inicioSesion} href="/campeones">Campeones</a>

            </div>
        </div>
    );
    function hamburguesa(e) {
        let menu = document.getElementById("menuHamburguesa");
        let acceso = document.getElementById("accesoHamburguesa");
        if (menu.style.display === "none"||menu.style.display === "") {
            menu.style.display = "flex";
            acceso.style.display = "none";
        } 
    }

    function redirigir(event) {
        event.preventDefault();
        window.location.href = "/usuario/" + document.getElementById("search").value;
    }
}

export default Perfil;
