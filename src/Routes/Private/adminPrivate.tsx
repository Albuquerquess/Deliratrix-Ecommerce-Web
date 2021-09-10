import React from 'react';
import { Redirect, Route } from 'react-router-dom';
//Context
import { AdminContext } from '../../Context/Admin'
// Types
import { AdminPrivateProps } from '../../types/Admin'

const AdminPrivate = ({component, ...rest}: AdminPrivateProps) => {
    const { getToken }  = React.useContext(AdminContext)
    const token = getToken()
    const routeComponent = (props: any) => (
        token ? React.createElement(component, props)
        : <Redirect to={{pathname: '/admin/login'}}/>
    )
    return <Route {...rest} render={routeComponent}/>;
}

export default AdminPrivate;