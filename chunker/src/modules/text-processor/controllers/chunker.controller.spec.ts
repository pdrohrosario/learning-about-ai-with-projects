import { Test, TestingModule } from '@nestjs/testing';
import { ChunkerController } from './chunker.controller';
import { ChunkerService } from '../services/chunker.service';

describe('ChunkerController', () => {
  let controller: ChunkerController;
  let service: ChunkerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChunkerController],
      providers: [ChunkerService],
    }).compile();

    controller = module.get<ChunkerController>(ChunkerController);
    service = module.get<ChunkerService>(ChunkerService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return chunks when chunkText is called', () => {
    const body = { text: 'Hello world. This is a test.', limit: 15 };
    const result = controller.chunkText(body);

    expect(result).toBeDefined();
    expect(result.total_chunks).toBeGreaterThan(0);
    expect(result.chunks).toContain('Hello world.');
  });
});
