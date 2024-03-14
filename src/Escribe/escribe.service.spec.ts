import { Test, TestingModule } from '@nestjs/testing';
import { EscribeService } from './escribe.service';

describe('EscribeService', () => {
  let service: EscribeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EscribeService],
    }).compile();

    service = module.get<EscribeService>(EscribeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
