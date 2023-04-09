import { NextFunction, Request, Response } from "express";
import ItsASecretLol from "../secrets";
import utf8 from "utf8";
import { removeSpecialChars } from "../utils/stringUtils";
const { API_KEY, LANGUAGE } = ItsASecretLol;
//constants can probably sit in a secret file
export const transformText = (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;
    const text = body.input;
    const cleanText = removeSpecialChars(text);
    const encodedText = utf8.encode(text);
    const transformedText = {
        text: encodedText,
        ai: true,
        language: LANGUAGE,
        key: API_KEY
    }
    req.body.input = transformedText;
    next();
}