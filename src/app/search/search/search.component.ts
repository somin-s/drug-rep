import { Component, ViewChild} from '@angular/core';
import { ServiceService } from '../../service/service.service';

import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Compound } from '../../models/compound';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

    displayedColumns: string [] = ['compoundId','id','longName','url', 'Link'];
    //dataSource! :  MatTableDataSource<any>;
    dataSource : any = [];
    image: string = "";
    standardInchiKey: any = [];
    uci: any = [];

  
    constructor(private service: ServiceService) { }

  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    searchCompound: Compound = {
      compound : "161671",
      sourceID : 0,
      type : "uci"
    }
  
    ngOnInit(){
      this.refreshList();    
    }
    refreshList() {
      this.service.getCompound(this.searchCompound).subscribe(data=>{
        console.log(data);
        const values = Object.values(data);
        const compound = Object.values(values[0]);
        const compoundDetail = Object.values(compound[0]);

        const sources = compoundDetail[1];
        this.standardInchiKey = compoundDetail[2];
        this.uci = compoundDetail[3];
        this.getImage(this.uci);
        console.log(sources);

        this.dataSource = sources;
        //this.standardInchiKey = standardInchiKey;
        //this.dataSource = new MatTableDataSource(sources);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
    }
    getImage(Urluci: string) {
      this.image = "https://www.ebi.ac.uk/unichem/api/v1/images/"+Urluci;
    }

    onSearch() {
      
    }

    onClick(url: string) {
      window.open(url,"_blank");
    }
  
  
  }
  