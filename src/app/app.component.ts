import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isCollapsed = false;
  isActive = [false, false];
  onClick(target: EventTarget | null,isActive:boolean) {
    if (target) {
      const title = (target as HTMLElement).closest('.ant-menu-submenu-title');
      const submenu = title?.parentElement
        ?.getElementsByClassName('ant-menu-sub')[0]
        ?.getElementsByTagName('ul')[0] as HTMLUListElement;
      if (submenu) {
        console.log(isActive);
        if (isActive) {
          const submenuContainer = title?.parentElement?.getElementsByClassName('ant-menu-sub')[0] as HTMLDivElement
          submenuContainer.style.height=submenu.offsetHeight+'px'
          console.log(submenu.offsetHeight);
        }
      }
    }
  }
}
