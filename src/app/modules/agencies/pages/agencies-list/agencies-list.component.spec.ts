import { LoaderService } from "@shared/services/loader.service";
import { AgenciesController } from "../../controllers/agencies.controller";
import { AgenciesListPageComponent } from "./agencies-list.component";

describe('@AgenciesListPageComponent', () => {
  let component: AgenciesListPageComponent;
  let controler: jasmine.SpyObj<AgenciesController>;
  let loader: jasmine.SpyObj<LoaderService>;

  beforeEach(() => {
    controler = jasmine.createSpyObj('AgenciesController', ['onInit']);
    loader = jasmine.createSpyObj('LoaderService', ['show', 'hide']);
    component = new AgenciesListPageComponent(controler, loader);
  });

  describe('When initialize component', () => {
    it('#Should call on init from controller', () => {
      component.ngOnInit();
      expect(controler.onInit).toHaveBeenCalled();
    });
  });

});
