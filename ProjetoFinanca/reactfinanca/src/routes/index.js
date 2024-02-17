import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Menu from '../pages/menu/index'
import Pagina404 from '../pages/404/404'
import Form from '../pages/registros/index'
import Consulta from '../pages/consulta/consulta'
import Edit from '../pages/edit'
import Deletar from '../pages/delete'


export default function Routers() {
    return (

        <Switch>
            <Route exact path='/' component={Menu} />
            <Route exact path='/registros' component={Form} />
            <Route exact path='/consulta' component={Consulta} />
            <Route exact path='/edit/:id' component={Edit} />
            <Route exact path='/apaga/:id' component={Deletar} />
            <Route path='*' component={Pagina404} />
        </Switch>

    )
}