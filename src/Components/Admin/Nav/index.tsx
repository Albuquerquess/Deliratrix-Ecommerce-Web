import React from 'react';
import { Link } from 'react-router-dom';
// @types
import { AdminNavProps } from '../../../@types/Admin';
// styles
import { AdminNavContainer } from './styles';




const AdminNav: React.FC<AdminNavProps> = ({to, children}) => {
  return <AdminNavContainer>
        <h1>Admin</h1>
        <Link to={to ? to : '#'}>{children}</Link>
    </AdminNavContainer>;
}

export default AdminNav;