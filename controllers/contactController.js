import Contact from "../models/ContactModel.js";
import { StatusCodes } from 'http-status-codes'
import {
  BadRequestError,
  NotFoundError,
} from '../errors/index.js'


const createQueries = async (req, res) => {
    const { 
        userName,
      email,
      contact,
      message
      } = req.body
  
    console.log("req.body::::::::::::",req.body)
    if ( !userName || !email|| !contact||  !message) {
      throw new BadRequestError('Please provide all values')
    }
    const contacts = await Contact.create(req.body)
    res.status(StatusCodes.CREATED).json({ status: "success", contacts });
  }
const getAllQueries = async (req, res) => {
   // NO AWAIT
    let result = Contact.find()
    const contacts = await result
    res.status(StatusCodes.OK).json({  status: "success",contacts})
  }
  const getQuerieByContact = async (req, res) => {
    const { contact: queriesContact } = req.params
  
    const contact = await Contact.findOne({ contact: queriesContact })
    res.status(StatusCodes.OK).json({ status: "success", contact });
  }


  export { createQueries, getAllQueries,getQuerieByContact}
