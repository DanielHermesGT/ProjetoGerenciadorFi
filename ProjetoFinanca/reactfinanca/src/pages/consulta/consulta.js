import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Menu } from "../registros/stylecons";
import { DIV } from "./styleconsu"
import axios from "axios";
import { FaRegTrashAlt, FaPen } from 'react-icons/fa'


export default function Consulta() {


    const [dados, setandodados] = useState([])


    useEffect(() => {

        const headers = {
            'header': {
                'Content-Type': 'application/json'
            }
        }

        try {

            axios.get("http://localhost:3005/consulta", headers)
                .then(res => { setandodados(res.data) })
                .catch(err => { console.log("Deu erro") })
        } catch (e) {
            console.log(e)
        }


    }, [])




    return (
        <>

            <Menu>
                <header>
                    <Link to="/" className="menu"><button>Menu</button></Link>
                </header>
            </Menu>


            <DIV >
                <div className="regis">


                    <table>
                        <tbody>
                            <tr className="legenda">
                                <td>Saldo Inicial</td>
                                <td>Ganhos</td>
                                <td className="gasto">Despesas</td>
                                <td className="res">Resultado Final</td>
                                <td>Editar</td>
                                <td>Excluir</td>
                            </tr>


                            {dados.map((element) => (
                                <tr key={element.id} className="legenda">

                                    <td>{element.saldo}</td>
                                    <td>{element.ganhos}</td>
                                    <td>{element.despesas}</td>
                                    <td>{element.saldo + element.ganhos - element.despesas}</td>
                                    <td><Link to={`/edit/${element.id}`}><FaPen /></Link></td>
                                    <td><Link to={`/apaga/${element.id}`}><FaRegTrashAlt /></Link></td>


                                </tr>
                            ))}

                        </tbody>

                    </table>
                </div>
            </DIV>

            <footer>

            </footer>


        </>
    )
}