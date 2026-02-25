import { Test, TestingModule } from '@nestjs/testing';
import { ChunkerService } from './chunker.service';

describe('ChunkerService', () => {
  let service: ChunkerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChunkerService],
    }).compile();

    service = module.get<ChunkerService>(ChunkerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('splitText', () => {
    it('should return the whole text if it is shorter than the limit', () => {
      const text = 'Short text';
      const limit = 20;
      const chunks = service.splitText(text, limit);
      expect(chunks).toEqual([text]);
    });

    it('should split text at the last space before the limit', () => {
      const text = 'Hello world, this is a test';
      const limit = 12; // "Hello world," is 12 chars
      const chunks = service.splitText(text, limit);
      expect(chunks[0]).toBe('Hello world,');
    });

    it('should split text at punctuation marks', () => {
      const text = 'First sentence. Second sentence.';
      const limit = 18;
      const chunks = service.splitText(text, limit);
      expect(chunks[0]).toBe('First sentence.');
      expect(chunks[1]).toBe('Second sentence.');
    });

    it('should force split at the limit if no valid separator is found', () => {
      const text = 'Supercalifragilisticexpialidocious';
      const limit = 10;
      const chunks = service.splitText(text, limit);
      expect(chunks[0]).toBe('Supercalif');
    });

    it('should handle text that exactly matches the limit', () => {
      const text = 'Exact limit';
      const limit = 11;
      const chunks = service.splitText(text, limit);
      expect(chunks).toEqual([text]);
    });
  });
});
