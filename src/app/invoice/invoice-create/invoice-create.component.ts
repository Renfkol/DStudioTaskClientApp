import {Component, OnInit, ViewChild} from '@angular/core';
import {InvoiceFormComponent} from "../invoice-form/invoice-form.component";
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";
import {Invoice, ProcessingStatus} from "../../model/invoice";



@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.scss']
})
export class InvoiceCreateComponent implements OnInit {

  @ViewChild(InvoiceFormComponent,{static:false}) private formComponent: InvoiceFormComponent|undefined;


  constructor(private data:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  save() {
    let dateTime = new Date();
    const newInvoice:Invoice = {
      createUpdateDateTime: dateTime,
      id:this.formComponent?.formInvoice.controls['id'].value,
      sum:this.formComponent?.formInvoice.controls['sum'].value,
      paymentMethod:parseInt(this.formComponent?.formInvoice.controls['paymentMethod'].value),
      processingStatus:ProcessingStatus.New
    }
    console.log(this.formComponent?.formInvoice);
    console.log(newInvoice);
    this.data.createInvoice(newInvoice).subscribe(data => this.router.navigateByUrl("/invoicelist/1"));
  }
}
