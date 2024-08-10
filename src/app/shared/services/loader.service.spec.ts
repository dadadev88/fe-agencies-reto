import { TestBed } from '@angular/core/testing';
import { LoaderService } from './loader.service';
import { DynamicComponentService } from './dynamic-component.service';

describe('@LoaderService', () => {
  let service: LoaderService;
  let dynamicContainer: jasmine.SpyObj<DynamicComponentService>;

  beforeEach(() => {
    dynamicContainer = jasmine.createSpyObj('DynamicComponentService', {}, {
      viewContainerRef: jasmine.createSpyObj('ViewContainerRef', ['createComponent', 'clear'])
    });
    service = new LoaderService(dynamicContainer);
  });

  describe('When call show loader', () => {

    beforeEach(() => {
      (dynamicContainer.viewContainerRef.createComponent as jasmine.Spy).and.returnValue({
        instance: { setProperties: jasmine.createSpy() }
      });
    });

    it('#Should call createComponent', () => {
      service.show();
      expect(dynamicContainer.viewContainerRef.createComponent).toHaveBeenCalled();
    })
  });

  it('#Should call clear when container has content (component)', () => {
    Object.defineProperty(dynamicContainer.viewContainerRef, 'length', { value: 1 });
    service.close();
    expect(dynamicContainer.viewContainerRef.clear).toHaveBeenCalled();
  });
});
