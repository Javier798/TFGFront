import React, { useEffect } from "react";
import Perfil from "../Perfil";
import ImgCampeon from "./ImgCampeon";
import Habilidades  from "./Habilidades";
import Skins from "./Skins";
function Campeon(props) {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [champion,setChampion] = React.useState(true);
    React.useEffect(() => {
        async function fetchData() {
            let summonername = "FlyingGecko048";
            let response = await fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonername + "?api_key=" + process.env.REACT_APP_APIKEY);
            let userData = await response.json();
            setData(userData);
             response = await fetch(
                "http://localhost/TFG/blitz/proyecto/public/jsonreader/266"
              );
              let champion = await response.json();

                setChampion(champion);
            setLoading(false);
            
        }
        fetchData();

    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }


    return (
        <div>
            <Perfil userData={data}></Perfil>
            <ImgCampeon></ImgCampeon>
            <Habilidades champion={champion}></Habilidades>
            <Skins></Skins>
        </div>

        
    );
}

export default Campeon;