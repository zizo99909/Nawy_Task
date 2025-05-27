"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apartmentController_1 = require("../controllers/apartmentController");
const router = express_1.default.Router();
router.get("/", apartmentController_1.getAllApartments);
router.get("/:id", (req, res, next) => {
    Promise.resolve((0, apartmentController_1.getApartmentById)(req, res)).catch(next);
});
router.post("/", apartmentController_1.createApartment);
exports.default = router;
