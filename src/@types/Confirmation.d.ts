export interface contentProps {
  category: string;
  desc: string;
  id: number;
  rate: number;
  registered_at: string;
  title: string;
  type: string;
  url: string;
}

export interface txidProps {
  txid?: string
}

export interface PaymentConfirmedProps {
  error: boolean
  paid: boolean
  message?: string
  
}