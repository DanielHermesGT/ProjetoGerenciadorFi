import React, { useState } from "react";
import { Link } from "react-router-dom"
import { DIV, Menu, Ped } from "./stylecons"
import axios from "axios";

export default function Registrar() {


    const [Msg, setMsg] = useState('')

    const [dados, setandodados] = useState({
        saldo: 0,
        ganhos: 0,
        despesas: 0
    })



    const Change = (e) => {
        setandodados({ ...dados, [e.target.name]: e.target.value })
    }


    const Submits = async (e) => {
        e.preventDefault()
        const headers = {
            'header': {
                'Content-Type': 'application/json'
            }
        }

        await axios.post("http://localhost:3005/recebedados", dados, headers)
            .then(res => {
                console.log(res)

            })
            .then(res => {
                setMsg("Dados Registrados Com Sucesso!")
            })


    }

    return (
        <>
            <Menu>
                <header>
                    <Link to="/" className="menu"><button>Menu</button></Link>
                </header>
            </Menu>

            <Ped>

                <div className="ger">



                    <div>

                        {Msg ? <p className="aviso">{Msg}</p> : ''}
                    </div>


                    <DIV className="form">
                        <form onSubmit={Submits}>

                            <input type="number" className="saldo" min={0} name="saldo" placeholder="Seu Saldo Inicial" onChange={Change} />
                            <input type="number" className="ganho" min={0} name="ganhos" placeholder="Seus Ganhos" onChange={Change} />
                            <input type="number" className="despesas" min={0} name="despesas" placeholder="Suas Despesas" onChange={Change} />


                            <button type="submit">Enviar</button>

                        </form>
                    </DIV>

                </div>
            </Ped>



            <footer>

            </footer>
        </>
    )
}
