import { Pipe, PipeTransform } from '@angular/core';
import {PaymentMethod} from "../../model/invoice";

@Pipe({
  name: 'paymentMethodPipe'
})
export class PaymentMethodPipe implements PipeTransform {

  transform(value: PaymentMethod): string {
    switch (value) {
      case PaymentMethod.CreditCard:
        return 'Credit Card';
      case PaymentMethod.DebitCard:
        return 'Debit Card';
      case PaymentMethod.ElectronicСheck:
        return 'Electronic Сheck';
      default:
        return `Invalid ${value}`;
    }
  }

}
