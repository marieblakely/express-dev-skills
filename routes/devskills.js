import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'

const router = Router()



router.get('/', devskillsCtrl.index)

router.get('/new', devskillsCtrl.new)

router.post('/', devskillsCtrl.create)

router.get('/:devskillId', devskillsCtrl.show)




export { router }
