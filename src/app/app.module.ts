import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InilineEditComponent } from './iniline-edit/iniline-edit.component';
import { IconButtonsComponent } from './icon-buttons/icon-buttons.component';
import { SubtaskListComponent } from './subtask-list/subtask-list.component';
import { EditablePartComponent } from './editable-part/editable-part.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogicPilotComponent } from './logic-pilot/logic-pilot.component';
import { ActivityComponent } from './activity/activity.component';
import { CommentsComponent } from './comments/comments.component';
import { AttachmentsComponent } from './attachments/attachments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InilineEditComponent,
    IconButtonsComponent,
    SubtaskListComponent,
    EditablePartComponent,
    LogicPilotComponent,
    ActivityComponent,
    CommentsComponent,
    AttachmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
