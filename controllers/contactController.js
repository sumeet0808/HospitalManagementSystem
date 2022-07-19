import Contact from '../models/ContactModel.js';
import { StatusCodes } from 'http-status-codes';
import { ErrorStatus } from './constants.js';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const createQueries = async (req, res) => {
  const { userName, email, contact, message } = req.body;

  const data = await Contact.create(req.body);
  res.status(StatusCodes.CREATED).json({ status: 'success', data });
};
const getAllQueries = async (req, res) => {
  let result = Contact.find();
  const data = await result;
  res.status(StatusCodes.OK).json({ status: 'success', data });
};
const getQueriesByContact = async (req, res) => {
  const { contact: queriesContact } = req.params;

  const data = await Contact.findOne({ contact: queriesContact });
  res.status(StatusCodes.OK).json({ status: 'success', data });
};

export { createQueries, getAllQueries, getQueriesByContact };
