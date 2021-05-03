import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationServices } from 'src/_service/location-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.scss']
})
export class CreateLocationComponent implements OnInit {

  
  createLocation:FormGroup;
  name:string;
  address:string;
  uuid:number;
  parent_id:number;
  area_m2:number;

  constructor(private router:Router,
              private fb:FormBuilder,
              private service: LocationServices,
  ) { 
    this.createLocation = this.fb.group({
      uuid: ['', [Validators.required]],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      area_m2: ['', [Validators.required]],
      parent_id: [''],

    })
   }

  ngOnInit(): void {
  }

  goBack(){
    this.router.navigate(['/']);
  }

  sendLocation(){

    let data = {
      uuid:this.uuid,
      name:this.name,
      address:this.address,
      parent_location_id:this.parent_id,
      area_m2:this.area_m2
    }

  
      this.service.createLocation(data).subscribe((data:any)=>{

        if(data.code === 9009){
          Swal.fire('Atención', data.message,'error');
        }else{
          this.router.navigate(['/']);
        }
      }, error =>{
        Swal.fire('Atención', 'No existe locación principal con código: '+this.parent_id,'error');
      })
   
    


  }

}
