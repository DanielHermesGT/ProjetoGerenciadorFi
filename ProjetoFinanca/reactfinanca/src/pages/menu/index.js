import React from "react"
import { Link } from "react-router-dom"


export default function Menu() {

    return (
        <>
            <header>

            </header>

            <div id="div">

                <Link to="/registros" className="btn"><button>Registrar Finança</button></Link>
                <Link to="/consulta" className="btn"><button>Extratos</button></Link>

            </div>

            <footer>

            </footer>

        </>
    )
}

