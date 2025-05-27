"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApartment = exports.getApartmentById = exports.getAllApartments = void 0;
const apartment_1 = __importDefault(require("../models/apartment"));
const generateReference_1 = require("../utils/generateReference");
const getAllApartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //const { search } = req.query;
        const query = {};
        // if (search) {
        //   query.$or = [
        //     { unit_name: { $regex: search, $options: 'i' } },
        //     { unit_number: { $regex: search, $options: 'i' } },
        //     { project: { $regex: search, $options: 'i' } },
        //   ];
        // }
        const apartments = yield apartment_1.default.find(query);
        res.json(apartments);
    }
    catch (err) {
        res.status(500).json({ error: "Server Error" });
    }
});
exports.getAllApartments = getAllApartments;
const getApartmentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //getApartmentById
    try {
        const id = req.params.id;
        const apartment = yield apartment_1.default.findById(req.params.id);
        res.json(apartment);
    }
    catch (err) {
        res.status(404).json({ error: "Not found" });
    }
});
exports.getApartmentById = getApartmentById;
const createApartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reference = yield (0, generateReference_1.generateUniqueReference)();
        const price = req.body.price ? `${req.body.price} EGP` : undefined;
        const size = req.body.size ? `${req.body.size} m²` : undefined;
        const downPayment = req.body.downPayment
            ? `${req.body.downPayment} EGP`
            : undefined;
        const installment = req.body.installment
            ? `${req.body.installment} EGP`
            : undefined;
        const apartment = new apartment_1.default(Object.assign(Object.assign({}, req.body), { reference,
            price,
            size,
            downPayment,
            installment }));
        yield apartment.save();
        res.status(201).json(apartment);
    }
    catch (err) {
        res.status(400).json({ error: "Invalid data" });
    }
});
exports.createApartment = createApartment;
