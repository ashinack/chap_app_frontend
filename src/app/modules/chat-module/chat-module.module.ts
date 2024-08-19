import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { HomeComponent } from './home/home.component';
import { ChatModuleModuleRoutingModule } from './chat-module.routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ChatModuleModuleRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class ChatModuleModule {}
