import React, { useEffect } from "react";
import Perfil from "../Perfil";
import ImgCampeon from "./ImgCampeon";
import Habilidades  from "./Habilidades";
import Skins from "./Skins";
import { useParams } from "react-router-dom";

function Campeon(props) {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(true);
    const [champion,setChampion] = React.useState(true);
    const { id } =useParams();
    React.useEffect(() => {
        async function fetchData() {
            
            let response = await fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + localStorage.getItem("nombreInvocador") + "?api_key=" + process.env.REACT_APP_APIKEY);
            let userData = await response.json();
            setData(userData);
             response = await fetch(
                "http://localhost/TFG/blitz/proyecto/public/jsonreader/" + id
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
            <ImgCampeon campeon={champion}></ImgCampeon>
            <Habilidades champion={champion}></Habilidades>
            <Skins campeon={champion}></Skins>
        </div>

        
    );
}

export default Campeon;