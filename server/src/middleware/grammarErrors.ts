import { NextFunction, Request, Response } from "express";
import ItsASecretLol from "../secrets";
const fetch = require('node-fetch');
//bad practice
const { API_ERROR} = ItsASecretLol;

/**
 * Count the number of errors in the text
 * @param errorResponse 
 * @param scoreCard 
 * @returns 
 */
const countErrors = (errorResponse: any, scoreCard: any) => {
    const errors = errorResponse.response.errors;
    const errorCount = errors.length;
    scoreCard.grammaticalErrors = errorCount;
    return scoreCard;
}

const getGrammarErrors = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const input = body.input;
    const headers = {
        'Content-Type': 'application/json',
    }
    const errorResponse = await fetch(API_ERROR, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(input)
    });
    const error = await errorResponse.json();
    const currScoreCard = body.scoreCard;
    req.body.scoreCard = countErrors(error, currScoreCard);
    next();
}

export default getGrammarErrors;