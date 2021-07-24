export interface cartParamsProps {
    id?: string;
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

interface contentProps {
    category: string;
    desc: string;
    id: number;
    rate: number;
    registered_at: string;
    title: string;
    type: string;
    url: string;
  }
interface priceProps {
    content_id: string;
    id: number;
    price: number;
}
export interface cartDataProps {
    contents: contentProps[],
    prices: priceProps[]
}
