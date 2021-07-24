export interface searchParamsProps {
    search: string;
}

export interface styledSearchParams {
    modalIsOpen: boolean
}

export interface SortProps {
    clickFunction: function
}

export interface searchDataProps {
    desc:string;
    filename:string;
    id: number;
    label:string;
    price: number;
    rate: number;
    registered_at:string;
    time: number;
    title:string;
    type:string;
    category:string;
    url:string;   
}