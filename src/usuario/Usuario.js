import React from "react";
import Partida from "./Partida";
import Liga from "./Liga";
import Perfil from "../Perfil";
import "./usuario.css";
import InfiniteScroll from 'react-infinite-scroll-component';
import CampeonesMasUsados from "./CampeonesMasUsados";
import { useParams } from "react-router-dom";


function Usuario() {
    const [data, setData] = React.useState();
    const [partidas, setPartidas] = React.useState();
const [scroll, setScroll] = React.useState(10);
const [hasMore, setHasMore] = React.useState(true);
    const [loading, setLoading] = React.useState(true);
    const { summonername } =useParams();

    React.useEffect(() => {
        document.body.style.backgroundColor = "#0e1015";
        async function fetchData() {
localStorage.setItem("nombreInvocador",summonername);
            //console.log("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonername + "?api_key=" + process.env.REACT_APP_APIKEY);
            let response = await fetch("https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + summonername + "?api_key=" + process.env.REACT_APP_APIKEY);
            let userData = await response.json();
            let puuid = userData.puuid;
            setData(userData);
            //console.log("https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=20" + "&api_key=" + process.env.REACT_APP_APIKEY);
            response = await fetch("https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" + puuid + "/ids?start=0&count=20" + "&api_key=" + process.env.REACT_APP_APIKEY);
            let partidasID = await response.json();
            let partidasAux = [];
            for (let i = 0; i < 10; i++) {
                partidasAux.push(partidasID[i]);

            }
            setPartidas(partidasID);
            setLoading(false);
            setScroll(partidasAux);
            console.log(partidasID);
        }
        fetchData();

    }, []);


    //fetch more data
    const fetchMoreData = () => {
        console.log("fetching more data");
        let partidasAux = [];
            for (let i = 10; i < partidas.length; i++) {
                partidasAux.push(partidas[i]);
            }
            setScroll([...scroll, ...partidasAux]);
            setHasMore(false);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>

            <Perfil userData={data}></Perfil>

            <div id="contenedor">
                <div id="izquierda">
                    <Liga id={data.id} />
                    <CampeonesMasUsados id={data.id} />
                </div>
                <div id="derecha">
                    {<div className="partidas">
                        <InfiniteScroll
                            dataLength={scroll.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={<h4>Loading...</h4>}
                            scrollableTarget="this"
                            height={"718px"}
                            className="partidas"
                        >
                            {scroll.map((partida, index) => (
                            <Partida key={index} id={partida}></Partida>
                        ))}
                        </InfiniteScroll>
                    </div>}
                </div>
            </div>
        </div>
    );
}
export default Usuario;



function submit(event) {
    event.preventDefault();
}
