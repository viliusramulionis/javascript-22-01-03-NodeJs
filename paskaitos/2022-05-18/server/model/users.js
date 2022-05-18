import { DataTypes } from 'sequelize'

export const users = (sequelize) => {
    const schema = {
        first_name: {type: DataTypes.STRING, allownull: false},
        last_name: {type: DataTypes.STRING, allownull: false},
        email: {type: DataTypes.STRING, allownull: false},
        password: {type: DataTypes.STRING, allownull: false}
    }

    return sequelize.define('Users', schema)
}