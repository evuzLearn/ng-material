import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'av-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(translateSrv: TranslateService) {
    translateSrv.addLangs(['es']);
    translateSrv.setDefaultLang('es');
  }
}
