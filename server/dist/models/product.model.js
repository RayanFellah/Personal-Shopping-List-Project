"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const mongoose = require("mongoose");
exports.productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    productCategory: { type: String, required: true },
    date: { type: Date, required: true },
    productFreshness: { type: String, required: true },
    price: { type: Number, required: true },
    comments: { type: String, required: false },
    userId: { type: String, required: true },
});
//# sourceMappingURL=product.model.js.map