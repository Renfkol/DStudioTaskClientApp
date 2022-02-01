import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceListComponent} from "./invoice/invoice-list/invoice-list.component";
import {InvoiceCreateComponent} from "./invoice/invoice-create/invoice-create.component";

const routes: Routes = [
  {path:'invoicelist/:page',component:InvoiceListComponent},
  {path:'create',component:InvoiceCreateComponent},
  {path:'**',redirectTo:'/productlist/1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
