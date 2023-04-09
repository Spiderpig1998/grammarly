import { NextFunction, Request, Response } from "express";
import ItsASecretLol from "../secrets";
import {TEXT_SUMMARY_MOCK} from "../resources/resources";
const fetch = require('node-fetch');
//bad practice
const { API_SUMMARY} = ItsASecretLol;

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
    req.body.summary = summary.response;
    next();
}

export default getSummary;