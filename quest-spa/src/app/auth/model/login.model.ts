import { Validators } from '@angular/forms';
import { FormCtrlType, IDataModel, IDataModelField, IDataModelValidator } from 'studio-ui-tmpl';
export class LoginModel {
  constructor(
    public username?: string,
    public password?: string,
  ) { }

  getDataModel(): IDataModel {
    let fields: IDataModelField[] = [];
    let validators: IDataModelValidator[] = [];

    Object.entries(this).forEach(([key, value]) => {
      let prop: string = key;
      let dataType: any = "string";
      let type: any = "text";
      let controlType: any = FormCtrlType.INPUT;
      if (prop == 'username') {
        type = 'email';
      }
      if (prop == 'password') {
        type = 'password';
      }

      fields.push({
        name: prop,
        dataType: dataType,
        label: prop.replace(/([A-Z])/g, ' $1')
          .replace(/^./, function (str) {
            return str.toUpperCase();
          }),
        controlType: controlType,
        formView: true,
        type: type,
        placeholder: "Enter a value"
      });


      if (prop == 'username') {
        validators.push({
          name: prop,
          validationRule: [
            Validators.required,
            Validators.email
          ],
        });
      }
      if (prop == 'password') {
        validators.push({
          name: prop,
          validationRule: [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(9)

          ],
        });
      }
    });
    validators.forEach(c => {
      let field = fields[fields.findIndex(f => f.name == c.name)];
      if (field)
        field.isRequired = true;
    });

    return {
      fields: fields,
      columns: [],
      formSize: "400px",
      isCenteredForm: true,
      validators: validators
    };
  }
}
