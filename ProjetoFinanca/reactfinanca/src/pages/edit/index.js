import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Menu } from "../registros/stylecons";
import { DIV, Ped } from "./styleconsu"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";

export default function Edit() {

    const parametros = useParams();
    const id = (parametros.id)
    const [Msg, setMsg] = useState('')


    const [carr, setCar] = useState(true)
    const [puxa, setandopuxa] = useState({

        id: id,
        saldo: 0,
        ganhos: 0,
        despesas: 0,
    })


    const Submits = async (e) => {

        e.preventDefault()
        console.log(puxa)
        const headers = {
            'header': {
                'Content-Type': 'application/json'
            }
        }

        await axios.post("http://localhost:3005/editnova", puxa, headers)
            .then(res => {
                console.log(res)

            })
            .then(resp => {
                setMsg("Dados Informados")
            })
    }


    useEffect(() => {

        if (id === undefined) {

            return
        }
        const headers = {
            'header': {
                'Content-Type': 'application/json'
            }
        }

        axios.get("http://localhost:3005/edit/" + id, headers)
            .then(res => {
                setandopuxa(res.data)
                setCar(false)

            })



            .catch(err => { console.log("Deu erro") })

    }, [id])


    const Change = (e) => {
        setandopuxa({ ...puxa, [e.target.name]: e.target.value })
    }


    return (
        <>


            <Menu>
                <header>
                    <Link to="/consulta" className="menu"><button>Menu</button></Link>
                </header>
            </Menu>




            {
                carr ? (
                    <p></p>
                ) : (

                    <>

                        <DIV >
                            <div className="regis">


                                <Ped>
                                    <div className="ger">

                                        <div>

                                            {Msg ? <p>{Msg}</p> : ''}
                                        </div>
                                        <DIV className="form">
                                            <form onSubmit={Submits}>


                                                <input type="number" className="saldo" name="saldo" placeholder="Seu Saldo Inicial" defaultValue={puxa[0].saldo} onChange={Change} />
                                                <input type="number" className="ganho" name="ganhos" placeholder="Seus Ganhos" defaultValue={puxa[0].ganhos} onChange={Change} />
                                                <input type="number" className="despesas" name="despesas" placeholder="Suas Despesas" defaultValue={puxa[0].despesas} onChange={Change} />



                                                <button type="submit">Enviar</button>

                                            </form>
                                        </DIV>
                                    </div>
                                </Ped>
                            </div>
                        </DIV>
                    </>
                )
            }







            <footer>

            </footer>


        </>
    )
}