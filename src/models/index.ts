import { sequelize } from '../config/db';
import User from './user.model';
import Event from './event.model';
import Attendance from './attendance.model';

User.hasMany(Event, { foreignKey: 'organizerId' });
Event.belongsTo(User, { foreignKey: 'organizerId' });

User.belongsToMany(Event, { through: Attendance });
Event.belongsToMany(User, { through: Attendance });

export { sequelize, User, Event, Attendance };
