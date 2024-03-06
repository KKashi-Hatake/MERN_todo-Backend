import ErrorHandler from "../Utils/ErrorHandler.js";
import { Todo } from "../Models/todo.model.js";
import { asyncHandler } from "../Utils/asynHandler.js";

// get all Todos
export const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ owner: req.user._id });
  res.status(200).json({
    success: true,
    message: "Todos fetched",
    todos,
  });
});

//create a todo
export const createTodo = asyncHandler(async (req, res) => {
  const { content } = req.body;
  if (!content) {
    throw new ErrorHandler(400, "Content is required to create a todo.");
  }
  const todo = await Todo.create({
    owner: req.user._id,
    content,
  });
  if (!todo) {
    throw new ErrorHandler(500, "Something went wrong while creating todo.");
  }
  res.status(200).json({
    success: true,
    message: "Todo created.",
    todo,
  });
});

//Update a todo
export const updateTodo = asyncHandler(async (req, res) => {
  const { _id, content, isComplete } = req.body;
  const todo = await Todo.findById(_id);
  if (!todo) {
    throw new ErrorHandler(404, "Todo not found");
  }
  if (todo.owner.toString() !== req.user._id.toString()) {
    throw new ErrorHandler(
      400,
      "You are not authorized to access this resource"
    );
  }
  todo.content = content;
  todo.isComplete = isComplete;
  await todo.save();
  res.status(200).json({
    success: true,
    message: "Todo updated",
    todo,
  });
});

//Delete a Todo
export const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  if (!todo) {
    throw new ErrorHandler(404, "Todo not found");
  }
  if (todo.owner.toString() !== req.user._id.toString()) {
    throw new ErrorHandler(
      400,
      "You are not authorized to access this resource"
    );
  }
  await Todo.deleteOne({ _id: todo._id });
  res.status(200).json({
    success:true,
    message:'Todo deleted'
  })
});
