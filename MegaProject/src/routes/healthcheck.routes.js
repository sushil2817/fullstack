import {Router} from "express"
import { healthChekc } from "../controllers/healthcheck.controllers.js"

const router = Router()

router.route("/").get(healthChekc)
router.get('/',healthChekc)

export default router