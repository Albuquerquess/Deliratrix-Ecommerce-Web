import { RouteProps } from "react-router";

export interface selectProps {
    value: string;
    label: string;
}

interface types {
    qtd: number,
    type: string;
}

export interface typeProps {
    types: types[]
}

export interface categoryes {
    qtd: number;
    category: string;
}

export interface categoriesProps {
    type: string;
    categories:  categoryes[]   
}

export interface pricesProps {
    price: number;
    label: string;
}

export interface AdminContainerProps {
    newCategory: boolean;
}

export interface AdminNavProps {
    to: string
}

export interface AdminFormSchems {
    type: string;
    category: string;
    duration: number;
    title: string;
    price: number;
    description: string;
    finalContent: string;
}

export interface CreateContentValidate {
    message: string;
    error: string;
}

export interface ItemProps {
    title: string;
    id: string;
    onDelete: () => void;
}

export interface isValidLogin {
    isAuth: boolean
    token: string
}

export interface AdminPrivateProps extends RouteProps {
    exact: boolean
    component: any
    path: string
}

export interface loginContainerProps {
    infoDisplay: boolean
}