export class NotFound extends Error {
    code = 404
    name = "NotFound"
    constructor(message: string) {
        super(message)
    }
}