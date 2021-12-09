import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("accessToken")
export class AuthDataStore {
  @JsonProperty("accessToken", String)
  accessToken: string = "";
  @JsonProperty("refreshToken", String)
  refreshToken: string = "";
  @JsonProperty("expiresIn", Number)
  expiresIn: number = 0;
  @JsonProperty("isAdmin", Boolean)
  isAdmin: boolean = false;
  @JsonProperty("loginDate", Date)
  loginDate!: Date;
};

export class authData {
  private accessToken: string = "";
  private refreshToken: string = "";
  private isAdminRole: boolean = false;
  private loginDate!: Date;
  private tokenExpiryDuration: number = 0;
  private tokenExpiryDate!: Date;
  constructor(authModel: AuthDataStore) {
    this.init(authModel);
  }

  private init(authModel: AuthDataStore) {
    this.accessToken = authModel.accessToken;
    this.refreshToken = authModel.refreshToken;
    this.isAdminRole = authModel.isAdmin;
    this.loginDate = new Date(authModel.loginDate);
    this.updateTokenDuration(authModel.expiresIn);
  }

  private updateTokenDuration(expiresIn: number): void {
    if (this.accessToken != null && this.loginDate != null) {
      this.tokenExpiryDate = new Date();
      this.tokenExpiryDate.setSeconds(this.loginDate.getSeconds() + expiresIn);
    }
  }

  get token() {
    if (!this.tokenExpiryDate ||
      this.tokenExpiryDate <= new Date())
      return null;
    else
      return this.accessToken;
  }
  get tokenDuration() {
    if (!this.token)
      return 0;

    return this.tokenExpiryDate.getTime() - new Date().getTime();
  }
  get isAdmin() {
    return this.isAdminRole;
  }
}