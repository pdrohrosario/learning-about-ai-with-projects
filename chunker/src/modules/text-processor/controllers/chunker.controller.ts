import { Body, Controller, Post } from '@nestjs/common';
import { ChunkerService } from '../services/chunker.service';
import { ChunkRequestDto } from './dto/chunk-request.dto';

@Controller('chunker')
export class ChunkerController {
  constructor(private readonly chunkerService: ChunkerService) {}

  @Post()
  chunkText(@Body() body: ChunkRequestDto) {
    const limit = body.limit || 100; 
    const result = this.chunkerService.splitText(body.text, limit);
    
    return {
      total_chunks: result.length,
      chunks: result,
    };
  }
}

