const { Destination } = require('../models')

const createDestination = async (req, res) => {
  try {
    const destination = await new Destination(req.body)
    await destination.save()
    return res.status(201).json({
      destination
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find({})
    console.log(destinations)
    return res.status(200).json({ destinations })
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ error: error.message })
  }
}

const getDestinationById = async (req, res) => {
  try {
    const { id } = req.params
    const destination = await Destination.findById(id)
    if (destination) {
      return res.status(200).json({ destination })
    }
    return res.status(404).send('That destination does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateDestination = async (req, res) => {
  try {
    const destination = await Destination.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).json(destination)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteDestination = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Destination.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Destination deleted')
    }
    throw new Error('Destination not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createDestination,
  getAllDestinations,
  getDestinationById,
  updateDestination,
  deleteDestination
}
