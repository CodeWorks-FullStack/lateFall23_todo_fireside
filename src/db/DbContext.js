import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { ToDoSchema } from '../models/ToDo.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  ToDos = mongoose.model('ToDo', ToDoSchema);
}

export const dbContext = new DbContext()
