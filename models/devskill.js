import mongoose from 'mongoose'

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema


const devskillSchema = new Schema({
  text: String,
  profiency: String,
})

const Devskill = mongoose.model('Devskill', devskillSchema)

export {
  Devskill
}