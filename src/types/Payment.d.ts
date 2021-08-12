export interface CopyPasteProps {
    clickFunction: function
}

export interface PaymentProps {
    qrcode: string,
    chargeRaw: string,
    txid: string
}

export interface PaymentConfirmedProps {
    error: boolean
    paid: boolean
    message?: string
    
}