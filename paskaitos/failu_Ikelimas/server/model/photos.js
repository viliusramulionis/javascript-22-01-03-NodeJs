import { DataTypes } from 'sequelize'

export const photos = (sequelize) => {
    const schema = {
        photo: {type: DataTypes.STRING, allowNull: false}
    }

    return sequelize.define('Photos', schema)
}