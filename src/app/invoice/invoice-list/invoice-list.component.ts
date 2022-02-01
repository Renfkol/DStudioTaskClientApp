import {Component, ComponentFactoryResolver, OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {PageInfo} from "../../model/page-info";
import {MatSort, Sort} from '@angular/material/sort';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Invoice} from "../../model/invoice";
import {MatTableDataSource} from "@angular/material/table";

export class  MainPageModel{
  public invoices: Invoice[]=[]
  public pageInfoModel?: PageInfo
}

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {


  public mainPageModel:MainPageModel;

  // Пришлось ввставить ts-ignore потому что не срабатывала проверка при перегрузке данных - всегда ругалось на undefined
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['createUpdateDateTime', 'id', 'processingStatus', 'sum', 'paymentMethod'];
  data:Invoice[]=[];
  dataSource = new MatTableDataSource(this.data)


  constructor(private dataService: DataService,
              private activateRoute: ActivatedRoute,
              private router: Router)
  {
    this.mainPageModel = new MainPageModel();
    this.data=[];
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params:Params)=>
    {
      this.load(params["page"]);
    })

    this.dataSource.sort = this.sort;
  }

  load(page:number) {
    this.dataService.getPage(page).subscribe((data:any) => {
      this.mainPageModel = data;
      if(this.mainPageModel?.invoices)
      {
        this.data = this.mainPageModel.invoices;
        this.dataSource= new MatTableDataSource(this.data);
        this.dataSource.sort = this.sort;
      }
        console.log(this.mainPageModel);
    });
  }

  goPage(difference:number){
    if(this.mainPageModel.pageInfoModel) {
      let p:number = this.mainPageModel.pageInfoModel?.pageNumber+difference;
      this.router.navigate(['/invoicelist',p]);
    }
  }
}
