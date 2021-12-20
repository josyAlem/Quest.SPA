import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, Injector } from "@angular/core";
import { JsonConvert, JsonObject, JsonProperty } from "json2typescript";
@JsonObject("AppSettings")
export class AppSettings {

    @JsonProperty("APIBaseUrl", String)
    APIBaseUrl: string = "";
    @JsonProperty("APIKey", String)
    APIKey: string = "";

}
export function loadConfig(config: AppConfigService) {
    return () => config.load();
}

@Injectable({
    providedIn: 'root',
})
export class AppConfigService {
    constructor(private injector: Injector, @Inject('appConfigPath') public settingsFilePath: string) { }

    private config!: AppSettings;
    load() {
        let http = this.injector.get(HttpClient);

        return http.get(this.settingsFilePath)
            .subscribe({
                next: (data) => {
                    const jsonConvert = new JsonConvert();
                    this.config = jsonConvert.deserializeObject(data, AppSettings);
                    return;
                },
                error: (e) => {
                    console.error(e);
                }
            });
    }

    get settings() {
        return this.config;
    }
}
