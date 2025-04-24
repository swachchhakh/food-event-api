import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Attendance extends Model {}

Attendance.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER },
    eventId: { type: DataTypes.INTEGER },
  },
  { sequelize, modelName: 'attendance' }
);

export default Attendance;
