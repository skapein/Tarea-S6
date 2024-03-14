import { Test, TestingModule } from '@nestjs/testing';
import { EscribeController } from './escribe.controller';

describe('EscribeController', () => {
  let controller: EscribeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EscribeController],
    }).compile();

    controller = module.get<EscribeController>(EscribeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
