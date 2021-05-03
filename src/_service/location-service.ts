import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpProxyService } from './http-proxy-service';
import { Endpoint } from 'src/_utils/endpoint';


@Injectable()
export class LocationServices {


    private proxy: HttpProxyService;

    private _urlService: string;
    constructor(private _http: HttpClient,
        private url: Endpoint) {
        
        this._urlService = url.getServicesEndpoint();
        this.proxy  = new HttpProxyService(_http, this._urlService);
    }

    public getAllLocations<T>(): Observable<T> {
        return this.proxy.get<T>( "/locations");
    }
   
    public createLocation<T>(paranm:any): Observable<T> {
        return this.proxy.post<T>( "/location/create",paranm);
    }
    
}