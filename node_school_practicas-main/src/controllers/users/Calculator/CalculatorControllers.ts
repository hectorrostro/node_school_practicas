import express from 'express'

export async function CalculadoraFunction(req: express.Request, res: express.Response) {
    const { a, b, operacion } = req.query
    const numA = parseFloat(a as string)
    const numB = parseFloat(b as string)
    let resultado: number

    switch (operacion) {
        case 'suma': resultado = numA + numB; break
        case 'resta': resultado = numA - numB; break
        case 'multiplicacion': resultado = numA * numB; break
        case 'division':
            if (numB === 0) return res.status(400).send({ error: 'No se puede dividir entre 0' })
            resultado = numA / numB; break
        default:
            return res.status(400).send({ error: 'Operacion no valida. Usa: suma, resta, multiplicacion, division' })
    }

    return res.status(200).send({ resultado })
}