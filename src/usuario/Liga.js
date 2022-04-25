import React, { useEffect } from "react";


function Liga(props) {
    const [liga, setliga] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function fetchData() {
            
            let response=await fetch("https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/" + /*"u9W_P7YkYu6LcJx0_zf_tttiViMJ_V9Xi1KSYVPstTYe6WM"*/props.id + "?api_key=" + process.env.REACT_APP_APIKEY);
            let liga = await response.json();

            let ligas = new Array();;
            for (let i = 0; i < liga.length; i++) {

                ligas[liga[i].queueType] = liga[i];
              }

            setliga(ligas);
            setLoading(false);

        }
        fetchData();

    }, []);


    if (loading) {
        return <p>Loading...</p>;
    }


    return (

        <div id="liga">
            <div id="imgLiga">
                <img src={liga.RANKED_SOLO_5x5 !=undefined ? process.env.REACT_APP_LIGAS + liga.RANKED_SOLO_5x5.tier + ".png ":process.env.REACT_APP_LIGAS+"UNRANKED.png" } alt=""></img>
            </div>
            <div id="nombreLiga">
                <h1>{liga.RANKED_SOLO_5x5 !=undefined ? (liga.RANKED_SOLO_5x5.tier + " " + liga.RANKED_SOLO_5x5.rank) : ("UNRANKED")}</h1>
            </div>

        </div>
    );
}

export default Liga;