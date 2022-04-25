import React, { useEffect } from "react";


function CampeonesMasUsados(props) {
    const [campeones, setCampeones] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {

            let response = await fetch("https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + /*"u9W_P7YkYu6LcJx0_zf_tttiViMJ_V9Xi1KSYVPstTYe6WM"*/props.id + "?api_key=" + process.env.REACT_APP_APIKEY);
            let campeonesMasUsadosData = await response.json();
            let campeonesMasUsados = new Array();
            for (let i = 0; i < 5; i++) {

                response = await fetch("http://localhost/TFG/blitz/proyecto/public/jsonreader/" + campeonesMasUsadosData[i].championId);
                let campeon = await response.json();
                campeon.championLevel=campeonesMasUsadosData[i].championLevel;
                campeonesMasUsados.push(campeon);
            }

            setCampeones(campeonesMasUsados);
            setLoading(false);

        }
        fetchData();

    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }


    return (
        <div id="campeonesMasUsados">
            {campeones.map((campeon, index) => (
                <div key={index} className="campeon">
                    <div className="imgCampeon" style={{backgroundImage:"url("+process.env.REACT_APP_IMGPARTIDA+campeon.image.full+")"}} ></div>
                    <div className="nombreCampeon">
                        <h1>{campeon.name}</h1>
                    </div>
                    <div className="maestriaCampeon"><img src={process.env.REACT_APP_MAESTRIAS+obtenerMaestria(campeon.championLevel)} className="puntos"></img></div>
                </div>
            ))}
        </div>
    );
}

export default CampeonesMasUsados;

function obtenerMaestria(nivel) {
    switch (nivel) {
      case 7:
        return "maestria7.png";
      case 6:
        return "maestria6.png";
      case 5:
        return "maestria5.png";
      case 4:
        return "maestria4.png";
      case 3:
        return "maestria3.png";
      case 2:
        return "maestria2.png";
      case 1:
        return "maestria1.png";
  
    }
  }