import express from 'express'
import { body, validationResult } from "express-validator";
import { RequestValidationError } from '../errors/input-error';
const router = express.Router();

// Middleware
import getScoreCard from '../middleware/scorecard';
import getSummary from '../middleware/summerize';
import getGrammarError from '../middleware/grammarErrors';
import getSpellingErrors from '../middleware/spellingError';
import { transformText } from '../middleware/transformText';

const validation = [
    body("input")
        .trim()
        .isLength({ min: 20, max: 500 })
        .withMessage("input string must be between 4 and 20 characters"),
];

router.post('/text-info',
    validation,
    transformText,
    getSummary,
    getScoreCard,
    getGrammarError,
    getSpellingErrors,
    (req: any, res: any) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new RequestValidationError(errors.array());
        }
        const body = req.body;
        const summary = body.summary;
        const scoreCard = body.scoreCard;
        const response = {
            summary,
            scoreCard,
        }

        res.status(200).send(response);
    });

export { router as scoreCard }