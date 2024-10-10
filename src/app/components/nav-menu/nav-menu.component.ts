import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [RouterOutlet, PoToolbarModule, PoMenuModule, PoPageModule],

  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
})
export class NavMenuComponent {
  public readonly logoTotvs: string = 'assets/icon-totvs.svg';

  public readonly title: string = 'Sync Técnica';
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'Proof of concept', link: 'proof-of-concepts' },
  ];

  private onClick() {
    alert('Clicked in menu item');
  }
}
