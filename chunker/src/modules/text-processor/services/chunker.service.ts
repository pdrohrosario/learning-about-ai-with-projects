import { Injectable } from '@nestjs/common';
import { Chunk } from '../models/Chunk';

@Injectable()
export class ChunkerService {

    public splitText(text: string, limit: number): string[] {

        if (text.length <= limit) {
            return [text];
        }

        let chunk = new Chunk([], 0, 0, limit);

        while (chunk.currentPosition < text.length) {
            chunk.lastEnd = this.findPositionNextValidEnd(text, chunk);

            this.addChunkInList(text, chunk);

            if (chunk.lastEnd >= text.length) break;

            this.updateCurrentPosition(text, chunk);
        }

        return chunk.paragraphs;
    }

    private findPositionNextValidEnd(text: string, chunk: Chunk): number {
        const startSearchAt = this.calculateNextEnd(text, chunk.currentPosition, chunk.limit);

        if (startSearchAt >= text.length) {
            return text.length;
        }

        for (let i = startSearchAt; i > chunk.currentPosition; i--) {
            if (['!', '.', '?', ' '].includes(text.charAt(i))) {
                return i;
            }
        }

        return startSearchAt;
    }

    private calculateNextEnd(text: string, currentPosition: number, limit: number): number {
        let nextEnd = currentPosition + limit;
        if (nextEnd > text.length) {
            nextEnd = text.length;
        }
        return nextEnd;
    }

    private addChunkInList(text: string, chunk: Chunk): void {
        const chunkText = text.slice(chunk.currentPosition, chunk.lastEnd).trim();
        if (chunkText.length > 0) {
            chunk.paragraphs.push(chunkText);
        }
    }

    private updateCurrentPosition(text: string, chunk: Chunk): void {
        chunk.currentPosition = chunk.lastEnd;

        if (chunk.lastEnd === chunk.currentPosition && chunk.currentPosition < text.length) {
            chunk.currentPosition++;
        }
    }

}
