import { GridComponent } from './grid/grid.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GridRoutingModule } from './grid/grid-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatGridListModule,
  MatSidenavModule,
  MatTabsModule,
  MatToolbarModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { PimComponent } from './pim/pim.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    TranslateModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    CommonModule,
    GridRoutingModule,
    MatCardModule,
    FlexLayoutModule.withConfig({ addFlexToParent: false })
  ],
  declarations: [LayoutComponent, NavComponent, TopnavComponent, SidebarComponent, PimComponent, GridComponent]
})
export class LayoutModule {}
