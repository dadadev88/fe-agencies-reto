import { TestBed } from '@angular/core/testing';
import { LoaderService } from './loader.service';
import { AppVCR } from './app-vcr.service';

describe('@LoaderService', () => {
  let service: LoaderService;
  let appVcr: jasmine.SpyObj<AppVCR>;

  beforeEach(() => {
    appVcr = jasmine.createSpyObj('DynamicComponentService', {}, {
      viewContainerRef: jasmine.createSpyObj('ViewContainerRef', ['createComponent', 'clear'])
    });
    service = new LoaderService(appVcr);
  });

  describe('When call show loader', () => {

    beforeEach(() => {
      (appVcr.viewContainerRef.createComponent as jasmine.Spy).and.returnValue({
        instance: { setProperties: jasmine.createSpy() }
      });
    });

    it('#Should call createComponent', () => {
      service.show();
      expect(appVcr.viewContainerRef.createComponent).toHaveBeenCalled();
    })
  });

  it('#Should call clear when container has content (component)', () => {
    Object.defineProperty(appVcr.viewContainerRef, 'length', { value: 1 });
    service.close();
    expect(appVcr.viewContainerRef.clear).toHaveBeenCalled();
  });
});
