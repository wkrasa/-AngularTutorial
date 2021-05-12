import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PS_INTERVAL, PollingService } from './polling.service';


export interface ConfigurableModuleConfig{
  interval: number;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    PollingService,
  ]
})
export class ConfigurableModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: ConfigurableModule,
      providers:[
        PollingService
      ]
    }
  }

  static forChild(config: ConfigurableModuleConfig): ModuleWithProviders{
    return {
      ngModule: ConfigurableModule,
      providers:[
        PollingService,
        {
          provide: PS_INTERVAL,
          useValue: config?.interval ?? 100,
        }
      ]
    }
  }
}
