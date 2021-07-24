import * as yup from 'yup';

async function createContentValidate(adminPayload: Object) {
    const adminSchema = yup.object().shape({
        type: yup.string().required('O campo de TIPO deve ser preenchido!'),
        category: yup.string().required('O campo de CATEGORIA deve ser preenchido!'),
        duration: yup.number().positive('O campo de DURAÇÃO não pode ser um valor NEGATIVO!'),
        title: yup.string().required('O campo de TÍTULO deve ser preenchido!'),
        prices: yup.array().of(
            yup.object().shape({
                price: yup.number().min(1, 'o valor deve ser maior ou igual a R$1,00').required('O PREÇO DO CONTEÚDO deve ser preenchido!'),
                label: yup.string().required()
            })
        ).required('o campo PREÇO deve ser preenchido!'),
        desc: yup.string().required('O campo de DESCRIÇÃO deve ser preenchido!'),
        finalContentUrl: yup.string().url('Você deve adicionar uma URL').required('O campo de LINK DO CONTEÚDO deve ser preenchido!'),
    })

    type AdminSchemaType = yup.InferType<typeof adminSchema>;

    const valid = adminSchema.validate(adminPayload)
        .then((valid) => {
            if (valid) return {valid: true, error: ''}
        }).catch((err) => {
            return {valid: false, error: String(err.message) }
        }).finally(() => {
            return {valid: false, error: ''}
        })
        return valid
}

export default createContentValidate
