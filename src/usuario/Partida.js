import React, { useEffect } from "react";


function Partida(props) {
    const [partida, setPartida] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [jugadorActual, setJugadaActual] = React.useState();
    const [items, setItems] = React.useState();
    const [campeon, setCampeon] = React.useState();
    React.useEffect(() => {
        async function fetchData() {
            
            let summonername = "FlyingGecko048";
            //random between 0 and 3
            let random = Math.floor(Math.random() * 0.5);
            //await new Promise(resolve => setTimeout(resolve, random * 1000));
            
            let response = await fetch("https://europe.api.riotgames.com/lol/match/v5/matches/" + props.id + "?api_key=" + process.env.REACT_APP_APIKEY);
            let partidaContenido = await response.json();
            setPartida(partidaContenido);
            let jugadaActualAux = partidaContenido.info.participants.find(element => element.summonerName.toUpperCase() == summonername.toUpperCase());
            setJugadaActual(jugadaActualAux);
            let itemsAux = [jugadaActualAux.item0, jugadaActualAux.item1, jugadaActualAux.item2, jugadaActualAux.item3, jugadaActualAux.item4, jugadaActualAux.item5, jugadaActualAux.item6];
            setItems(itemsAux);
            
            response = await fetch("http://localhost/TFG/blitz/proyecto/public/jsonreader/"+jugadaActualAux.championId+"/image");
            let champion = await response.json();
                        setCampeon(champion);
            setLoading(false);
            
        }
        fetchData();

    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }


    return (

        <div className="partida">
            <div className="imgPartida" style={{backgroundImage: "url(" + process.env.REACT_APP_IMGPARTIDA + campeon.full + ")" }}>

            </div>
            <div className="contenidoPartida">
                <div className="datosPartida">
                    <div className="resultado">
                        <h1 className={jugadorActual.win === "Win" ? "victoria" : "derrota"}>
                            {jugadorActual.win === "Win" ? "Victoria" : "Derrota"}
                        </h1>
                        <h2>{jugadorActual.kills + "/" + jugadorActual.deaths + "/" + jugadorActual.assists}</h2>
                    </div>
                    <div className="minion">
                        <h1>Total cs</h1>
                        <h2>{jugadorActual.totalMinionsKilled + jugadorActual.neutralMinionsKilled}</h2>
                    </div>
                    <div className="kda">
                        <h1>KDA</h1>
                        <h2>{jugadorActual.deaths == 0 ? (jugadorActual.kills + jugadorActual.assists).toFixed(2) : ((jugadorActual.kills + jugadorActual.assists) / jugadorActual.deaths).toFixed(2)}</h2>
                    </div>
                </div>
                <div className="items">
                    {items.map((item, index) => (
                        <div key={index} className="item"><img src={process.env.REACT_APP_ITEMS + item + ".png"}></img></div>
                    ))}

                </div>
            </div>
            <div className="posicion"><img src={process.env.REACT_APP_POSICIONES + obtenerPosicion(jugadorActual.individualPosition)} className="posicionimg"></img></div>
        </div>



    );
}



function obtenerPosicion(posicion) {
    switch (posicion) {
        case "TOP":
            return "top.png";
        case "JUNGLE":
            return "jungla.png";
        case "MIDDLE":
            return "mid.png";
        case "BOTTOM":
            return "adc.png";
        case "UTILITY":
            return "apoyo.png";
        case "Invalid":
            return "aram.png";
        case "":
            return "custom.png";
        default:
            return "pepe.png";
    }
}

export default Partida;