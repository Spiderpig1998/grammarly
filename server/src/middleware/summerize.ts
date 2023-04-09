import { NextFunction, Request, Response } from "express";
import ItsASecretLol from "../secrets";
import { removeSpecialChars } from "../utils/stringUtils";
const fetch = require('node-fetch');
//bad practice
const { API_SUMMARY} = ItsASecretLol;

const formatSummary = (response: any) => {
    const summary  = response.summary;
    const cleanedSummary = summary.map( (str: string) =>  removeSpecialChars(str));
    return {summary: cleanedSummary};
}

const getSummary = async (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const input = body.input;
    const headers = {
        'Content-Type': 'application/json',
    }
    const summaryResponse = await fetch(API_SUMMARY, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(input)
    });
    const summary = await summaryResponse.json();
    req.body.summary = formatSummary(summary.response);
    next();
}

export default getSummary;