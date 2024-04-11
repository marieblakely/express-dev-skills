import { Devskill } from '../models/devskill.js'

function index(req, res) {
  Devskill.find({})
  .then(devskills => { 
    res.render('devskills/index', {
      devskills: devskills,
    })
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/')
  })
}

function newDevskill(req, res) {
  res.render('devskills/new')
}

export {
  index,
  newDevskill as new,
}