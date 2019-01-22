import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { ResetComponent } from './components/reset/reset.component';
import { ResultComponent } from './components/result/result.component';
import { SizeSettingComponent } from './components/size-setting/size-setting.component';
import { DemoDirectiveComponent } from './components/demo-directive/demo-directive.component';
import { ChangeStatusDirective } from './change-status.directive';
import { FormsModule } from '@angular/forms';
import { DemoJqueryComponent } from './components/demo-jquery/demo-jquery.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorPickerComponent,
    ResetComponent,
    ResultComponent,
    SizeSettingComponent,
    DemoDirectiveComponent,
    ChangeStatusDirective,
    DemoJqueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
