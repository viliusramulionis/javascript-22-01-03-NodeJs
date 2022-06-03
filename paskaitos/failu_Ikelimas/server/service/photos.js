import { database } from '../database/connection.js'

export const insert = async (data) => {
    try {
        const photo = new database.Photos(data)
        await photo.save()
        return photo.dataValues.id
    } catch(e) {
        return false
    }
}