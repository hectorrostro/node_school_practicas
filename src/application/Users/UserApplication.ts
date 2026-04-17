import fs from 'fs'
import path from 'path'

export const GetAllUsers = () => {
    const data = fs.readFileSync(path.join(__dirname, '../../ORM/users.json'), 'utf8')
    return JSON.parse(data)
}