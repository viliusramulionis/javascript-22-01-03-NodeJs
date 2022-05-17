import {database} from '../db/connection.js'

export const getAll = async () => {
    return await database.Tasks.findAll() //SELECT * FROM tasks
}

export const getById = async (id) => {
    return await database.Tasks.findByPk(id)
}

export const _delete = async (id) => {
    const task = await getById(id)
    await task.destroy()
}

export const insert = async (data) => {
    const task = new database.Tasks(data)

    await task.save()
}

export const update = async (id, data, done = false) => {
    const task = await getById(id)
    const taskUpdated = data.task && data.task != task.task
    const taskDone = data.done && data.done != task.done

    if(!taskUpdated && !done)
        return false

    if(!taskDone && done)
        return false

    Object.assign(task, data)
    await task.save()
} 