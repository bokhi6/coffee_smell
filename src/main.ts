import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const updatedConfig = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideAnimationsAsync()
  ]
};

bootstrapApplication(AppComponent, updatedConfig)
  .catch((err) => console.error(err));
