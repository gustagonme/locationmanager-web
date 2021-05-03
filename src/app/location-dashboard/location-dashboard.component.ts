import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LocationServices } from 'src/_service/location-service';

@Component({
  selector: 'app-location-dashboard',
  templateUrl: './location-dashboard.component.html',
  styleUrls: ['./location-dashboard.component.scss']
})
export class LocationDashboardComponent implements OnInit {

  query:string;
  locations:Array<any>;
  detailLocation:Array<any>;
  public isCollapsed = true;
  closeResult: string;

  constructor(private modalService:NgbModal,
    private service: LocationServices,
    private router:Router) { 
    
  }

  ngOnInit(): void {
    this.getLocations()
  }

  getLocations(){
    this.service.getAllLocations().subscribe((data:any)=>{
      this.locations = data
    })
    console.log(this.locations)
  }

  openDetails(content,location){
  
    this.detailLocation=Array.of(location);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openCreate() {
    this.router.navigate(['/create-location']);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
