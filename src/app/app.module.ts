import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornCardComponent} from './pages/unicorn-list/unicorn-card/unicorn-card.component';
import {MagicalNamePipe} from './shared/pipes/magical-name.pipe';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {UnicornModalComponent} from './pages/unicorn-list/unicorn-modal/unicorn-modal.component';
import {MenuComponent} from './pages/menu/menu.component';
import {MatMenuModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UnicornListComponent,
    UnicornCardComponent,
    MagicalNamePipe,
    MenuComponent,
    UnicornModalComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatIconModule,
    MatChipsModule,
    MatSidenavModule,
    MatMenuModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UnicornModalComponent],
})
export class AppModule {
}

