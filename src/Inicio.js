import React, { useEffect } from "react";
import styles from "./inicio.module.css";

function Inicio() {

    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        
        async function fetchData() {
            setLoading(false);

        }
        fetchData();

    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }



    return (

        <div className={styles.contenedor}>
            <h1 className={styles.titulo}>LEAGUE STATS</h1>
            <form className={styles.formuilario} onSubmit={enviar}>
                <label className={styles.etiqueta} htmlFor="search">Search</label>
                <input id="search" className={styles.search} type="search" placeholder="Search..." autoFocus required />
                <span className={styles.caret}></span>
            </form>
        </div>
    );
    
    function enviar(event) {
        event.preventDefault();
        window.location.href = "/usuario/"+document.getElementById("search").value;
    }
}

export default Inicio;