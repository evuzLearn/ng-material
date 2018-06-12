import { VidaModule } from './vida.module';

describe('VidaModule', () => {
  let vidaModule: VidaModule;

  beforeEach(() => {
    vidaModule = new VidaModule();
  });

  it('should create an instance', () => {
    expect(vidaModule).toBeTruthy();
  });
});
