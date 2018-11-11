import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  langs: string[] = [];

  constructor(
    private translate: TranslateService
  ) {
    this.langs = this.translate.getLangs();
    this.translate.get('HELLO')
    .subscribe((res: string) => {
      console.log(res);
    });
    this.translate.stream('GREETING', {name: 'nicolas'})
    .subscribe((res: string) => {
      console.log(res);
    });
  }

  changeLang(event) {
    this.translate.use(event.detail.value);
  }
}
