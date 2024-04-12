import { Router } from 'express'
import * as devskillsCtrl from '../controllers/devskills.js'

const router = Router()



router.get('/', devskillsCtrl.index)

router.get('/new', devskillsCtrl.new)

router.get('/:devskillId', devskillsCtrl.show)

router.get('/:devskillId/edit', devskillsCtrl.edit)

router.post('/', devskillsCtrl.create)

router.delete('/:devskillId', devskillsCtrl.delete)


router.put('/:devskillId', devskillsCtrl.update)




export { router }
