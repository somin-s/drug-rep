import { Component, ViewChild } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})

export class SourceComponent {

  displayedColumns: string [] = ['sourceID','nameLabel','description','UCICount', 'srcUrl', 'Options'];
  //let dataSources: any [response: string ,{sourceID: number, nameLabel:string, description:string,UCICount:number}, totalSources: string ] = null;
  

  constructor(private service: ServiceService){  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSources: any = [];
  //dataSources! : MatTableDataSource<any>;

  ngOnInit(){
    this.refreshList();
  }

  refreshList() {
    this.service.getSources().subscribe(data=>{
    console.log(data);
    const values = Object.values(data);
    console.log(values[1]);
    this.dataSources = values[1];
    //this.dataSources = new MatTableDataSource(values[1]);
    this.dataSources.paginator = this.paginator;
    this.dataSources.sort = this.sort;
   })
  }

  onClick(url: string) {
    window.open(url,"_blank");
  }

}
