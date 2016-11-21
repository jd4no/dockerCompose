import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ClickerService {

  private url: string = 'http://localhost:8001/';

  constructor(private http: Http) { }

  sendClick(): Promise<Boolean> {
    console.log('Sending click to the backend');

    let body = '';

    return new Promise ( resolve => {
      this.http.post(this.url + 'clicks/', body)
               .map((res: Response) => res.json())
               .subscribe(data => {
                 if (data.status === 200) {
                   resolve(true);
                 }
                 resolve(false);
               }, err => {
                 console.log(err.status);
                 resolve(false);
               });
    });
  }

}
