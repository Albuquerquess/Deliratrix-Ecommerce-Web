import React from 'react';
import Cookies from 'universal-cookie';

// @types
import { DebtorProps, LogicDebtorProps } from '../types/Debtor'

const initialState = {
    handleAddDebtor: (name: string, email: string, phone: string) => {},
    getDebtorData: () => {}
}

export const DebtorContext = React.createContext<LogicDebtorProps>(initialState)

export const DebtorProvider: React.FC = ({ children }) => {
    const [debtor, setDebtor] = React.useState<DebtorProps>()
    const cookies = new Cookies();

    async function handleAddDebtor(name: string, email: string, phone: string) {
        if (name && email && phone) {
            cookies.set('name', name)
            cookies.set('email', email)
            cookies.set('phone', phone)

            return setDebtor({name, email, phone})
        }else {
            alert('Não foi possivel registrar os dados!')
        }
    }

    async function getDebtorReport() {
        const name = cookies.get('name')
        const email = cookies.get('email')
        const phone = cookies.get('phone')

        return {name, email, phone}
    }

    function getDebtorData() {
        const allCookies = cookies.getAll()

        return debtor
    }

    return <DebtorContext.Provider value={{handleAddDebtor, getDebtorData}}>
        {children}
    </DebtorContext.Provider>;
}