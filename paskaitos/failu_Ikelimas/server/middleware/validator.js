const validator = (req, next, schema) => {
    const options = {
        abortEarly: false, //Nutraukiam validacija po pirmos nesekmes
        allowUnknown: true, //Leidimas priimti indeksus kuriu nera schemoje
    }

    const {error, value} = schema.validate(req.body, options)

    if(error) {
        next('Ivyko validacijos klaida')
    } else {
        req.body = value
        next()
    }
}

export default validator