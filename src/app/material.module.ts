import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports: [MatInputModule, MatButtonModule, MatIconModule, MatSidenavModule],
  exports: [MatInputModule, MatButtonModule, MatIconModule, MatSidenavModule],
})
export class MaterialModule {}
