import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
  ],
})
export class MaterialModule {}
