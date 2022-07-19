import { StatusCodes } from 'http-status-codes';
import { ErrorStatus } from './constants.js';
import UnAuthenticatedError from '../errors/unauthenticated.js';

const login = async (req, res, User, next) => {
  const { emailId, password } = req.body;
  try {
    const user = await User.findOne({
      emailId,
    }).select('+password');
    console.log('user::::::', user);
    if (!user) {
      throw new UnAuthenticatedError(ErrorStatus.invalidCrdentials);
    }
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError(ErrorStatus.invalidCrdentials);
    }
    const token = user.createJWT();
    user.password = undefined;
    res.status(StatusCodes.OK).json({
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export default login;
