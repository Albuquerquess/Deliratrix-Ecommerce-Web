import * as yup from 'yup';

async function identifyValidate(identifyPayload: Object) {
    const adminSchema = yup.object().shape({
        name: yup.string().required('O campo de NOME deve ser preenchido!'),
        email: yup.string().email().required('O campo de CATEGORIA deve ser preenchido!'),
        phone: yup.string().required(),

    })

    type IdentifySchemaType = yup.InferType<typeof adminSchema>;

    const valid = adminSchema.validate(identifyPayload)
        .then((valid) => {
            if (valid) return {valid: true, error: ''}
        }).catch((err) => {
            return {valid: false, error: String(err.message) }
        }).finally(() => {
            return {valid: false, error: ''}
        })
        return valid
}

export default identifyValidate
