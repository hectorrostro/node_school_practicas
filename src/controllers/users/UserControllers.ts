import express from 'express'
import { GetAllUsers } from '../../application/Users/UserApplication'
import { SuccessHttp, ErrorHttp, STATUS_HTTP_SUCCESS } from '../../messages/https.messages'

export async function GetAllUsersFunction(req: express.Request, res: express.Response) {
    try {
        const users = GetAllUsers()
        return res.status(200).send(SuccessHttp('Lista de usuarios', STATUS_HTTP_SUCCESS, users))
    } catch (error) {
        return res.status(500).send(ErrorHttp('Error al obtener usuarios', 'error', error))
    }
}