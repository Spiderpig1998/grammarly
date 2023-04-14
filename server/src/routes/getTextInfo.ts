import express from 'express'
import getScoreCard from '../middleware/scorecard';
const router = express.Router();

// Middleware
import getSummary from '../middleware/summerize';
import getGrammarError from '../middleware/grammarErrors';
import getSpellingErrors from '../middleware/spellingError';
import { transformText } from '../middleware/transformText';

router.post('/text-info', transformText, getSummary, getScoreCard, getGrammarError, getSpellingErrors, (req, res) => {
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