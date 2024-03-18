import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InputsComponent } from './Form/inputs/inputs.component';

import { KraFormComponent } from './kra-form/kra-form.component';
import { DateComponent } from './Form/inputs/date/date.component';
import { TextComponent } from './Form/inputs/text/text.component';
import { TextareaComponent } from './Form/inputs/textarea/textarea.component';
import { GroupedInputsComponent } from './Form/inputs/grouped-inputs/grouped-inputs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SelectContentComponent } from './Form/inputs/select-content/select-content.component';



@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    DateComponent,
    GroupedInputsComponent,
    TextareaComponent,
    TextComponent,
    KraFormComponent,
    SelectContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
