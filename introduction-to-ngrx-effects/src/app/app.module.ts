import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotoModule } from './photo/photo.module';
import { StoreModule } from '@ngrx/store';
import { photoReducer } from './store/photo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { PhotoEffects } from './store/photo.effects';
import { ApiModule } from './api/api.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		PhotoModule,
		StoreModule.forRoot({
			photo: photoReducer
		},
			{}
		),
		StoreDevtoolsModule.instrument({
			maxAge: 25, // Retains last 25 states
			logOnly: environment.production, // Restrict extension to log-only mode
		}),
		EffectsModule.forRoot([PhotoEffects]),
		ApiModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
