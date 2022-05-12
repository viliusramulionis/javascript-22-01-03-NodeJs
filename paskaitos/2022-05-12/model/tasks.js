import {DataTypes} from 'sequelize'

export const tasks = (sequelize) => {
    const attributes = {
        task: { type: DataTypes.STRING, allowNull: false},
        done: { type: DataTypes.BOOLEAN, allowNull: false}
    }

    return sequelize.define('Tasks', attributes)
}