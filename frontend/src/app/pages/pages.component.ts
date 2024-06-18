import { Component, OnInit, Renderer2 } from '@angular/core';
import { DialogService } from 'ng-devui/modal';
import { DrawerService, IDrawerOpenResult } from 'ng-devui/drawer';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PersonalizeComponent } from '../@shared/components/personalize/personalize.component';
import { PersonalizeService } from '../@core/services/personalize.service';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { DaLayoutConfig, DaLayoutService } from '../@shared/layouts/da-layout';
import { DaScreenMediaQueryService } from '../@shared/layouts/da-grid';
import { SideMenuComponent } from '../@shared/components/side-menu/side-menu.component';
import { Theme } from 'ng-devui/theme';


@Component({
  selector: 'da-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  menu: any;

  layoutConfig: DaLayoutConfig;
  isSidebarShrink: boolean = false;
  isSidebarFold: boolean = false;

  sideDrawer: IDrawerOpenResult;

  constructor(
    private drawerService: DrawerService,
    private dialogService: DialogService,
    private personalizeService: PersonalizeService,
    private layoutService: DaLayoutService,
    private mediaQueryService: DaScreenMediaQueryService,
    private render2: Renderer2,
    private translate: TranslateService
  ) {
    this.personalizeService.initTheme();
    this.layoutService
      .getLayoutConfig()
      .pipe(takeUntil(this.destroy$))
      .subscribe((config: DaLayoutConfig) => {
        this.layoutConfig = config;
        this.isSidebarShrink = !!this.layoutConfig.sidebar['shrink'];
      });

    this.mediaQueryService
      .getPoint()
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ currentPoint, change, compare }) => {
        /* ml：sidebar shrink breakpoint */
        if (change <= 0 && compare['ml'] <= 0) {
          this.sidebarShrink(true);
        } else if (change >= 0 && compare['ml'] > 0) {
          this.sidebarShrink(false);
        }

        /* mm：sidebar hidden breakpoint */
        if (change <= 0 && compare['mm'] <= 0) {
          this.sidebarFold(true);
        } else if (change >= 0 && compare['mm'] > 0) {
          this.sidebarFold(false);
        }
      });
  }

  ngOnInit() {
    this.translate
      .get('page')
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.updateMenu(res);
      });

    this.translate.onLangChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((event: TranslationChangeEvent) => {
        const values = this.translate.instant('page');
        this.updateMenu(values);
      });
    this.personalizeService.getUiTheme()!.subscribe((theme) => {
      const currentTheme = Object.values(
        (window as { [key: string]: any })['devuiThemes']
      ).find((i: Theme | unknown) => {
        return (i as Theme).id === theme;
      });
      if (currentTheme && (<any>currentTheme).isDark) {
        this.render2.addClass(document.body, 'is-dark');
      } else {
        this.render2.removeClass(document.body, 'is-dark');
      }
    })
  }

  updateMenu(values: any) {
    this.menu = [
      {
        title: values['dashbord']['title'],
        open: true,
        children: [
          {
            title: values['dashbord']['sample'],
            link: '/pages/getting-started/sample',
          },
        ],
        link: '/pages/getting-started',
        menuIcon: 'icon icon-console',
      },
      {
        title: 'Customer Management',
        open: false,
        children: [
          {
            title: 'Customer Card',
            link: "/pages/customer-management/customer-card",
          },
          {
            title: 'Total Customers',
            link: "/pages/customer-management/total-customers"
          },
          { 
            title: 'Customer Archive',
            link: '/pages/customer-management/customer-archive'
          },
        ],
        link: "/pages/customer-management",
        menuIcon: "icon icon-company-member", 
      },
      {
        title: 'Finances',
        open: false,
        children: [
          { title: 'Price List', link: '/pages/finances/price-list' },
          { title: 'Caisse', link: '/pages/finances/caisse' },
        ],
        link: "/pages/finances",
        menuIcon: "icon icon-fee-center", 
      },
      {
        title: "Resources",
        open: false,
        children: [
          
          { title: 'Agency', link: '/pages/resourcess/agency' },
          { title: 'Equipement', link: '/pages/resourcess/equipement' },
        ],
        link: "/pages/resourcess",
        menuIcon: "icon icon-archived-item", 
      },
      {
        title: 'Promotions',
        open: false,
        children: [
          { title: 'Promotion', link: '/pages/marketing/promotions' },
          { title: 'Promotion Client', link: '/pages/marketing/promotion-customer'}
        ],
        link: "/pages/marketing",
        menuIcon: "icon icon-desk-notice", 
      },
      {
        title: 'Operations Management',
        open: false,
        children: [
          { title: 'Operations', link: '/pages/operations-management/operations' },
          { title: 'Remarks', link: '/pages/operations-management/notifications' },
        ],
        link: "/pages/operations-management",
        menuIcon: "icon icon-setting", 
      },
      
      {
        title: 'User',
        open: false,
        children: [
          { title: 'User Settings', link: '/pages/user/settings' },
        ],
        link: "/pages/user",
        menuIcon: "icon icon-mine", 
      },
    ];
  }

  openSideMenuDrawer() {
    this.drawerService.open({
      drawerContentComponent: SideMenuComponent,
      width: '240px',
      position: 'left',
      // destroyOnHide: false,
      data: {
        data: this.menu,
      },
    });
  }

  personalizeConfig() {
    const result = this.dialogService.open({
      id: 'theme',
      width: '800px',
      maxHeight: '800px',
      title: '',
      content: PersonalizeComponent,
      backdropCloseable: true,
      onClose: () => {},
      buttons: [],
    });
  }

  sidebarShrink(isShrink: boolean) {
    this.isSidebarShrink = isShrink;

    if (this.layoutConfig.sidebar.firSidebar) {
      this.layoutConfig.sidebar.firSidebar.width = this.isSidebarShrink
        ? 54
        : 240;
    }
    this.layoutConfig.sidebar['shrink'] = this.isSidebarShrink;
    this.layoutService.updateLayoutConfig(this.layoutConfig);
  }

  sidebarFold(isFold: boolean) {
    this.isSidebarFold = isFold;

    if (this.layoutConfig.sidebar.firSidebar) {
      this.layoutConfig.sidebar.firSidebar.hidden = isFold;
      this.layoutService.updateLayoutConfig(this.layoutConfig);
    }
  }

  destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
