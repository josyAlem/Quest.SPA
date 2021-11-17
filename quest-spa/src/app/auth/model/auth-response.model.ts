import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("authResponseModel")
export class authResponseModel{
  @JsonProperty("accessToken", String)
   accessToken: string="";
   @JsonProperty("refreshToken", String)
   refreshToken:string="";
   @JsonProperty("expiresIn", Number)
   expiresIn:number=0;
   @JsonProperty("isAdmin", Boolean)
   isAdmin:boolean=false;

};