import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TextProcessorModule } from './modules/text-processor/text-processor.module';

@Module({
  imports: [TextProcessorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
