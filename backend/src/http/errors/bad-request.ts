export class BadRequest extends Error {
    code = 400
    name = "BadRequest"
    constructor(message: string) {
        super(message)
    }
}