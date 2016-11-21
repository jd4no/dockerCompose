import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CounterService {

  private url: string = 'http://localhost:8001/';

  constructor(private http: Http) { }

  getClicks(): Promise<number> {
    console.log('getting clicks from the backend');

    return new Promise ( resolve => {
      console.log('In fetch function');
      this.http.get(this.url + 'visits/')
               .map((res: Response) => res.json())
               .subscribe(data => {
                 console.log('Got data back');
                 console.log(data);
                 console.log(data.Clicks);
                 resolve(data.Clicks);
               }, err => {
                 console.log(err.status);
                 resolve(0);
               });
    });
  }

}
