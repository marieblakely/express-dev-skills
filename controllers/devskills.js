import { Devskill } from '../models/devskill.js'

function index(req, res) {
  Devskill.find({})
  .then(devskills => { 
    res.render('devskills/index', {
      devskills: devskills,
      time: req.time
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

function create(req, res) {
  req.body.done = false
  Devskill.create(req.body)
  .then(devskill => {
    res.redirect('devskills')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

function show(req, res) {
  Devskill.findById(req.params.devskillId)
  .then(devskill => {
    res.render('devskills/show', {
      devskill: devskill
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/devskills')
  })
}

export {
  index,
  newDevskill as new,
  create,
  show
}