import { Injectable } from "@angular/core";
import {JsonConvert, JsonObject, JsonProperty} from "json2typescript"

@JsonObject("AppSettings")
export class AppSettings {

    @JsonProperty("APIBaseUrl", String)
    APIBaseUrl: string = "";
    @JsonProperty("APIKey", String)
    APIKey: string= "";

}
export function loadConfig(config: AppConfigService) {
  return () => config.load();
}

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
public settingsFilePath:string='app-settings.json';
  public settings!: AppSettings;
  get WebUrl() {
      return location.protocol + '//' + window.location.host + '/';
  }
  
  public load() {
      return new Promise((resolve, reject) => {
          const self = this;
          const xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState === 4 && this.status === 200) {
                  const data = JSON.parse(this.responseText);
                  const jsonConvert = new JsonConvert();
                  self.settings =  jsonConvert.deserializeObject(data,AppSettings);
                  resolve(true);
              }
              if (this.status === 404) {
                  reject('Cannot find ' +self.settingsFilePath+' file');
              }
          };
          xhttp.open('GET', self.settingsFilePath, true);
          xhttp.send();
      }).catch(error => {
          console.error(error);
      });
  }
}
