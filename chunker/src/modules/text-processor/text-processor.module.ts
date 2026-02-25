import { Module } from '@nestjs/common';
import { ChunkerService } from './services/chunker.service';
import { ChunkerController } from './controllers/chunker.controller';

@Module({
  providers: [ChunkerService],
  controllers: [ChunkerController]
})
export class TextProcessorModule {}
