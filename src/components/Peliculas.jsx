import {Fragment, useEffect, useState} from "react";
import {Link} from "react-router";

export function Peliculas(){

    const [peliculas, setPeliculas] = useState([])
    const [cargando, setCargando] = useState(true)

    const traerPeliculas = async () => {

        try {
            const result = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=Spiderman`)
            const data = await result.json()


            const results = data.description;

            // const results = await Promise.all(promesasPeliculas);

            setPeliculas(results);
            setCargando(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        traerPeliculas()
    },[])

    if (cargando) {
        return <h1>Cargando...</h1>
    }

return (
        <div className="flex justify-center m-10">
            <ul className= "flex gap-5 flex-wrap ">
                {
                    peliculas.map(peli => <li className="w-[100px] md:w-[150px] h-[150px] md:h-[200px] bg-gray-200 shadow-md rounded-md flex items-center justify-center" key={peli["#ID"]}>
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-[8px] font-bold capitalize my-3">{peli["#TITLE"]}</p>
                            <img src={peli["#IMG_POSTER"]} alt={peli["TITLE"]} className="w-[80px] rounded-lg transition duration-300 hover:shadow-xl hover:scale-102"/>
                            <Link className="text-[10px] w-[100px] bg-black p-1 rounded-md text-white mt-3 flex items-center justify-center" to={`/peliculas/${peli["#IMDB_ID"]}`}>Ver</Link>
                        </div>

                    </li>)
                }
            </ul>
        </div>
)
}
