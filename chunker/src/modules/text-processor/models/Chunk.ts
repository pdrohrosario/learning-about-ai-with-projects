export class Chunk {
    paragraphs: string[]
    lastEnd: number
    currentPosition: number
    limit: number

    constructor(paragraphs: string[], lastEnd: number, currentPosition: number, limit: number) {
        this.paragraphs = paragraphs
        this.lastEnd = lastEnd
        this.currentPosition = currentPosition
        this.limit = limit
    }

}