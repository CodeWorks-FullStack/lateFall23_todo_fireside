import { toDosService } from "../services/TodosService.js";
import BaseController from "../utils/BaseController.js";

export class ToDosController extends BaseController {
  constructor () {
    super('api/todos')
    this.router
      .get('', this.getToDos)
      .get('/:toDoId', this.getToDoById)
      .post('', this.createToDo)
      .delete('/:toDoId', this.removeToDo)
      .put('/:toDoId', this.updateToDo)
  }



  async getToDos(request, response, next) {
    try {
      const toDos = await toDosService.getToDos()
      return response.send(toDos)
    } catch (error) {
      next(error)
    }
  }

  async getToDoById(request, response, next) {
    try {
      const toDoId = request.params.toDoId
      const toDo = await toDosService.getToDoById(toDoId)
      return response.send(toDo)
    } catch (error) {
      next(error)
    }
  }
  async createToDo(request, response, next) {
    try {
      const toDoData = request.body
      const toDo = await toDosService.createToDo(toDoData)
      return response.send(toDo)
    } catch (error) {
      next(error)
    }
  }

  async removeToDo(request, response, next) {
    try {
      const toDoId = request.params.toDoId
      const message = await toDosService.removeToDo(toDoId)
      return response.send(message)
    } catch (error) {
      next(error)
    }
  }

  async updateToDo(request, response, next) {
    try {
      const toDoId = request.params.toDoId
      const updateData = request.body
      const toDo = await toDosService.updateToDo(toDoId, updateData)
      return response.send(toDo)
    } catch (error) {
      next(error)
    }
  }
}