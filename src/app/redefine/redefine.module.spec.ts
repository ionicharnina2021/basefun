import { RedefineModule } from './redefine.module';

describe('RedefineModule', () => {
  let redefineModule: RedefineModule;

  beforeEach(() => {
    redefineModule = new RedefineModule();
  });

  it('should create an instance', () => {
    expect(redefineModule).toBeTruthy();
  });
});
