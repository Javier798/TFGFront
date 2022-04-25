import React, { useEffect } from "react";


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

        <div id="superior">
                <div id="usuario">
                    <div style={{ backgroundImage: "url(" + process.env.REACT_APP_ICONO + data.profileIconId + ".png)" }} id="imgUsuario">
                        <p id="nivel">{data.summonerLevel}</p>
                    </div>
                    <div id="nombreUsuario">
                        <h1>{data.name}</h1>
                    </div>
                </div>
                <div id="buscador">
                    <form role="search">
                        <label htmlFor="search">Search for stuff</label>
                        <input id="search" type="search" placeholder="Search..." autoFocus required />
                        <button type="submit">Go</button>
                    </form>
                </div>

                <div id="login">
                    <a id="inicioSesion" href="">Iniciar sesion</a>

                </div>
            </div>
    );
}

export default Perfil;