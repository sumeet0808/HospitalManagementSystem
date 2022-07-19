import jwt from 'jsonwebtoken';
import { ErrorStatus } from '../controllers/constants.js';
import { UnAuthenticatedError } from '../errors/index.js';

UnAuthenticatedError;
const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnAuthenticatedError(ErrorStatus.authenticationInvalid);
  }
  const token = authHeader.split(' ')[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId };

    next();
  } catch (error) {
    throw new UnAuthenticatedError(ErrorStatus.authenticationInvalid);
  }
};

export default auth;
