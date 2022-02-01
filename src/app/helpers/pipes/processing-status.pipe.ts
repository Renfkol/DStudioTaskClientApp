import { Pipe, PipeTransform } from '@angular/core';
import {ProcessingStatus} from "../../model/invoice";


//Пайп для отображения Статуса Счета в таблице на главной странице

@Pipe({
  name: 'processingStatusPipe'
})
export class ProcessingStatusPipe implements PipeTransform {

  transform(value: ProcessingStatus): string {
    switch (value) {
      case ProcessingStatus.New:
        return 'New';
      case ProcessingStatus.Paid:
        return 'Paid';
      case ProcessingStatus.Canceled:
        return 'Canceled';
      default:
        return `Invalid ${value}`;
    }
  }
}
