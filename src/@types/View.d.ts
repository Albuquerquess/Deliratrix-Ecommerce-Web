export interface styledViewProps {
    image?: string;
}

export interface viewParamsProps {
    id?: string;
}

export interface priceProps {
    price: number,
    label: string,
    id: number;
}

export interface contentProps {
    desc: string;
    category: string;
    type: string;
    filename: string;
    id: number;
    rate: number;
    registered_at: string;
    time: number;
    title: string;
    url: string;
    price: number;
}

export interface responseUniqueContentProps {
    content: contentProps;
    prices: priceProps[]
}

