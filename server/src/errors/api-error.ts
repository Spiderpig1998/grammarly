import { CustomError } from "./custom-error";

export class APIError extends CustomError {
    statusCode = 401;

    constructor(message: string | null) {
        super(message || "Error with TextGear API.");
        // Only because we are extending a built in class
        Object.setPrototypeOf(this, APIError.prototype);
    }

    serializeErrors() {
        return [{ message: "Error with TextGear API." }];
    }
}