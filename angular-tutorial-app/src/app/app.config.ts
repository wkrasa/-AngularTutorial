import { InjectionToken } from "@angular/core"

export interface AppConfig{
  useExtendLoger: boolean
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config',{
  providedIn: 'root',
  factory: () => ({
    useExtendLoger: true,
  })
});
