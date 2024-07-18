import express from 'express'
import {
  loginAdmin,
  refresh,
  logout,
  adminDasHboard,
} from '../controllers/loginController.js'
import verifyJWT from '../middleware/verifyJwt.js'

const router = express.Router()
// http://localhost:5000/api/admin

router.post('/login', loginAdmin)
router.get('/refresh', verifyJWT, refresh)
router.get('/adminDashboard', verifyJWT, adminDasHboard)
router.post('/logout', logout)

export default router
