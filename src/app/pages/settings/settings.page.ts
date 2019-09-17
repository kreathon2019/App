import { ThemeService } from '../../service/theme.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
 
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  ngOnInit() {
  }

  items = [
    { text: 'My first green item', color: '#00ff00' },
    { text: 'My second red item', color: '#ff0000' },
    { text: 'My third blue item', color: '#0000ff' }
  ];
 
  constructor(private theme: ThemeService, private sanitizer: DomSanitizer) {}
 
  enableDark() {
    this.theme.enableDark();
  }
 
  enableLight() {
    this.theme.enableLight();
  }
 
  getDynamicColor(color) {
    return this.sanitizer.bypassSecurityTrustStyle(`--myvar: ${color}`);
  }
}

/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/