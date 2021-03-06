import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PaymentMethod} from "../../model/invoice";


//Вспомогательный компонент формы для страницы создания
//Впоследствии использовался бы и на странице редактирования, где данные загружались бы в форму

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent {

  public formInvoice:FormGroup = new FormGroup({
    id: new FormControl(null,[
      Validators.required,
      Validators.min(1)
    ]),
    sum: new FormControl(null,[
      Validators.required,
      Validators.min(1)
    ]),
    paymentMethod: new FormControl(null,Validators.required)
  });

}
