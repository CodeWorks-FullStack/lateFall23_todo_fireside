import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class ToDosService {
  async updateToDo(toDoId, updateData) {
    const originalToDo = await this.getToDoById(toDoId)

    originalToDo.description = updateData.description ? updateData.description : originalToDo.description
    originalToDo.completed = updateData.completed != undefined ? updateData.completed : originalToDo.completed

    await originalToDo.save()

    return originalToDo
  }
  async getToDoById(toDoId) {
    const toDo = await dbContext.ToDos.findById(toDoId)
    if (!toDo) {
      throw new BadRequest(`Invalid id: ${toDoId}`)
    }
    return toDo
  }
  async removeToDo(toDoId) {
    const toDoToRemove = await this.getToDoById(toDoId)
    await toDoToRemove.remove()
    return `${toDoToRemove.description} has been removed!`
  }
  async getToDos() {
    const toDos = await dbContext.ToDos.find()
    return toDos
  }
  async createToDo(toDoData) {
    const toDo = await dbContext.ToDos.create(toDoData)
    return toDo
  }
}

export const toDosService = new ToDosService()