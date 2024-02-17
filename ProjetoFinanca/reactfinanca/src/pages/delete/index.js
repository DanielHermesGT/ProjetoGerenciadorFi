import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Deletar() {

    const parametros = useParams();
    const id = (parametros.id)
    
    const history = useHistory()

    const deletes = async (e) => {

        const headers = {
            'header': {
                'Content-Type': 'application/json'
            }
        }
        try {

            axios.post("http://localhost:3005/apaga/" + id, headers)
                .then(res => {
                    history.push("/consulta");
                })
        } catch (e) {
            console.log(e)
        }



    }

    useEffect(() => {
        deletes()

    })



}

