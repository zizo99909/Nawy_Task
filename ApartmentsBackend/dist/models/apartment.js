"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const apartmentSchema = new mongoose_1.default.Schema({
    name: {
        // name of the apartment
        type: String,
        required: true,
    },
    reference: {
        // reference number of the apartment
        type: Number,
        required: false,
        unique: true,
    },
    price: {
        // price of the apartment
        type: String,
        required: true,
    },
    bedrooms: {
        // number of bedrooms in the apartment
        type: String,
        required: true,
    },
    bathrooms: {
        // number of bathrooms in the apartment
        type: String,
        required: true,
    },
    size: {
        // size of the apartment
        type: String,
        required: true,
    },
    delivery: {
        // delivery date of the apartment
        type: String,
        required: true,
    },
    location: {
        // location of the apartment
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        // validate: {
        //   validator: async function (url: string) {
        //     // Check if the URL is a valid image URL
        //     return /\.(jpeg|jpg|gif|png|webp)$/i.test(url);
        //   },
        //   message: (props: any) => `${props.value} is not a valid image URL!`,
        // },
        required: false,
    },
    about: {
        // description of the apartment
        type: String,
        required: false,
    },
    compound: {
        // compound name of the apartment
        type: String,
        required: true,
    },
    saleType: {
        // sale type of the apartment
        type: String,
        required: true,
    },
    finishing: {
        // finishing type of the apartment
        type: String,
        required: true,
    },
    downPayment: {
        // down payment amount for the apartment
        type: String,
        required: true,
    },
    installmentYears: {
        // number of years for installment payment
        type: Number,
        required: true,
    },
    installment: {
        // monthly installment amount
        type: String,
        required: true,
    },
}, {
    toJSON: {
        virtuals: true,
        versionKey: false,
        transform: function (_doc, ret) {
            ret.id = ret._id; // add `id` field
            delete ret._id; // remove `_id` field
        },
    },
});
exports.default = mongoose_1.default.model("Apartment", apartmentSchema);
