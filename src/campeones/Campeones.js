import React from "react";
import Perfil from "../Perfil";
import styles from "./Campeones.module.css";

function Campeones() {
    const [data, setData] = React.useState();
    const [campeones, setCampeones] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [tagActual, setTagActual] = React.useState("Todos");
    const [campeonesFiltrados, setCampeonesFiltrados] = React.useState();

    React.useEffect(() => {
        async function fetchData() {
            
            let response = await fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + localStorage.getItem("nombreInvocador") + "?api_key=" + process.env.REACT_APP_APIKEY);
            let userData = await response.json();
            setData(userData);
            response = await fetch("http://localhost/TFG/blitz/proyecto/public/obtenerCampeones");
            let campeones = await response.json();
            setCampeones(campeones);
            setTagActual("Todos");
            setLoading(false);
        }
        fetchData();

    }, []);
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.content}>
            <Perfil userData={data}></Perfil>
            <div>
                <div className={styles.filtros}>
                    <select onChange={eventDificultad} id="dificultad" name="" className={styles.select}>
                        <option value="desc">Mas dificil primero</option>
                        <option value="asc">Mas facil primero</option>
                    </select>
                    <div className={styles.roles}>
                        <h1 onClick={pintar}>Todos</h1>
                        <h1 onClick={pintar} >Asesino</h1>
                        <h1 onClick={pintar}>Tanque</h1>
                        <h1 onClick={pintar}>Luchador</h1>
                        <h1 onClick={pintar}>Mago</h1>
                        <h1 onClick={pintar}>Apoyo</h1>
                        <h1 onClick={pintar}>Tirador</h1>
                    </div>
                </div>
                <div className={styles.campeones}>
                    {campeones.filter(campeon=>campeon[2].includes(traduccion(tagActual)) || tagActual == "Todos").map((campeon, index) => {
                        return (
                            
                            <div onClick={redirigir(campeon[3])} key={index} className={styles.campeon} style={{ backgroundImage: "url(" + process.env.REACT_APP_SPLASH + campeon[0] + ")" }}>
                                <h1>{campeon[0].substring(0, campeon[0].length - 6)}</h1>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );


function redirigir(campeon) {
    return () => {
        window.location.href = "/campeon/" + campeon;
    }
}
    function eventDificultad() {
        ordenar(document.getElementById("dificultad"));
        pintar(tagActual);
    }
    function ordenar(item) {
        let ordenacion = item.selectedOptions[0].innerHTML;
        if (ordenacion == "Mas facil primero") {
            campeones.sort(function (a, b) {
                // A va primero que B
                if (a[1] < b[1]) {
                    return -1;
                    // B va primero que A
                } else if (a[1] > b[1])
                    return 1;
                // A y B son iguales
                else
                    return 0;
            });
        } else if (ordenacion == "Mas dificil primero") {
            campeones.sort(function (a, b) {
                // A va primero que B
                if (a[1] > b[1]) {
                    return -1;
                    // B va primero que A
                } else if (a[1] < b[1])
                    return 1;
                // A y B son iguales
                else
                    return 0;
            });
        }
        setCampeonesFiltrados(ordenacion);
        pintar(tagActual);
    }
    function subrayado(item) {
        let subrayar = false;
        let roles = item.parentNode.children;
        if (item.style.borderBottom == "2px solid rgb(255, 255, 255)") {
            subrayar = false;
        }
        else if (item.style.borderBottom != "" && item.style.borderBottom != "0px") {
            subrayar = true;
        }
        for (let i = 0; i < roles.length; i++) {
            roles[i].style.borderBottom = "0";
        }
        if (!subrayar) {
            item.style.borderBottom = "2px solid #fff";
        }
    }
    function pintar(tag) {
        
        if(typeof tag == "string"){
            setTagActual(tag);
        }else{
            setTagActual(tag.target.innerHTML);
            subrayado(tag.target);
        }
        
    }

}

function traduccion(tag) {
    switch (tag) {
        case "Luchador":
            return "Fighter";
        case "Mago":
            return "Mage";
        case "Tanque":
            return "Tank";
        case "Asesino":
            return "Assassin";
        case "Apoyo":
            return "Support";
        case "Tirador":
            return "Marksman";
    }
}



export default Campeones;
