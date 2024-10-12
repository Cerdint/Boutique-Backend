import express from 'express'
import { createUser, getAllUser, getOneUser } from '../controller/userController'


const router = express.Router()


router.post('/user/create', createUser)
router.get('/user/findAll', getAllUser)
router.post('/user/findOne', getOneUser)


export default router