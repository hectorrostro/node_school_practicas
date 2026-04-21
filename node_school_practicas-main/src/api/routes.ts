import { Router } from 'express'
import { verifyToken } from '../decorator/http/protected.decorator'
import { checkSchemaHolaMundo } from './validator/index.validator'
import { GetHolaMundoFunction } from './index.api'
import { GetAllUsersFunction } from '../controllers/users/UserControllers'
import { CalculadoraFunction } from '../controllers/users/Calculator/CalculatorControllers'

const api = Router()

api.get( "/hola", checkSchemaHolaMundo, [verifyToken], GetHolaMundoFunction )
api.get( "/users", GetAllUsersFunction )
api.get("/calculadora", CalculadoraFunction)

export default api