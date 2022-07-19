import { StatusCodes } from "http-status-codes";

const login = async (req, res, User, next) => {
    const { emailId, password } = req.body;

    try {
        if (!emailId || !password) {
            throw new BadRequestError("please provide all values");
        }
        const user = await User.findOne({
            emailId,
        }).select("+password");
        console.log("user::::::", user);
        if (!user) {
            throw new UnAuthenticatedError("invalid cerdentials");
        }
        const isPasswordCorrect = await user.comparePassword(password);
        if (!isPasswordCorrect) {
            throw new UnAuthenticatedError("Invalid Credentials");
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
}

export default login;