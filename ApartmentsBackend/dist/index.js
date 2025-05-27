"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const apartmentRoutes_1 = __importDefault(require("./routes/apartmentRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI ||
    "mongodb+srv://apartmentsApp:zizozizo99@cluster0.lm2miuj.mongodb.net/";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/apartments", apartmentRoutes_1.default);
mongoose_1.default
    .connect(MONGO_URI)
    .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
    .catch((err) => console.error("Mongo connection failed", err));
