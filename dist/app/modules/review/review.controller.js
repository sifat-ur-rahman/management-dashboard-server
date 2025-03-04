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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewControllers = void 0;
const review_service_1 = require("./review.service");
const createReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviewData = req.body;
        const result = yield review_service_1.ReviewService.createReviewIntoDB(req.user, reviewData);
        res.status(201).json({
            success: true,
            statusCode: 201,
            message: 'Review created successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getBestReview = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield review_service_1.ReviewService.getBestReviewFromDB();
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: 'Best course retrieved successfully',
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.ReviewControllers = {
    createReview,
    getBestReview,
};
