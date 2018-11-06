import {
  Component
} from '@angular/core';

import {
  SkyAppResourcesService
} from '@skyux/i18n';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(
    private resourceService: SkyAppResourcesService
  ) {
    this.resourceService.getString('example_string').subscribe((value: string) => {
      console.log('Resource string value:', value);
    });
  }
}
