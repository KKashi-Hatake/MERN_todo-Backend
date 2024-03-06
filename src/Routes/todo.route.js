import {Router} from 'express'
import {isAuthenticatedUser} from '../Middlewares/auth.js'
import { createTodo, deleteTodo, getAllTodos, updateTodo } from '../Controllers/todo.controller.js';



const router = Router();


router.route('/all').get(isAuthenticatedUser,getAllTodos);
router.route('/create').post(isAuthenticatedUser,createTodo);
router.route('/update').post(isAuthenticatedUser,updateTodo);
router.route('/delete/:id').delete(isAuthenticatedUser,deleteTodo);




export default router;