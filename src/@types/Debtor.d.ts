export interface DebtorProps {
    name: string;
    phone: string;
    email: string;
}

export interface LogicDebtorProps {
    handleAddDebtor: (name: string, email: string, phone: string) => void;
    getDebtorData: () => any;
}