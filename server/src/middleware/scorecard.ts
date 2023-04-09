import { NextFunction, Request, Response } from "express";
import ItsASecretLol from "../secrets";
const fetch = require('node-fetch');
//bad practice
const { API_SCORECARD } = ItsASecretLol;

/**
 * get useful information from the scorecard
 * @param scoreCard 
 * @returns 
 */
const formatScoreCard = (scoreCard: any) => {
    const response = scoreCard.response;
    const stats = response.stats;
    const readability = {
        gradeLevel: stats.fleschKincaid.readingEase,
        interpretation: stats.fleschKincaid.interpretation,
    }

    return {
        ...readability,
    }
}

const getScoreCard = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const input = body.input;
    const headers = {
        'Content-Type': 'application/json',
    }
    const scoreResponse = await fetch(API_SCORECARD, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(input)
    });
    const score = await scoreResponse.json();
    req.body.scoreCard = formatScoreCard(score);
    next();
}

export default getScoreCard;