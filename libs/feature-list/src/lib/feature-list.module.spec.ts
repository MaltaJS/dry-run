import { async, TestBed } from '@angular/core/testing';
import { FeatureListModule } from './feature-list.module';

describe('FeatureListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeatureListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeatureListModule).toBeDefined();
  });
});
