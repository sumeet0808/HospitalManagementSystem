import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";

// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import doctorsRouter from "./routes/doctorsRoutes.js";
import contactRouter from "./routes/contactRoutes.js";
import patientRouter from "./routes/patientRoutes.js";
import appointmentRouter from "./routes/appointmentRoutes.js";
import prescribeRouter from "./routes/prescribeRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";
// const allowedOrigin = ['http://localhost:5000'];
// app.use(cors({
//   credentials: true,
//   origin: allowedOrigin
// }));
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', req.headers.origin);
//   res.header('Access-Control-Allow-Credentials', "true");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
//   res.setHeader('Access-Control-Allow-Headers', 'Set-Cookie')
//   next();
// });

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

//Middlewares
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

//Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/doctor", doctorsRouter);
//app.use("/api/v1/doctor", authenticateUser, doctorsRouter);
app.use("/api/v1/contact", contactRouter);
//app.use("/api/v1/patient", authenticateUser, patientRouter);
app.use("/api/v1/patient", patientRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/prescribe", prescribeRouter);

//Middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
