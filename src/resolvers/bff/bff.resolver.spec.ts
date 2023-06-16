import { Test, TestingModule } from '@nestjs/testing';
import { BffResolver } from './bff.resolver';

describe('BffResolver', () => {
  let resolver: BffResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BffResolver],
    }).compile();

    resolver = module.get<BffResolver>(BffResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
