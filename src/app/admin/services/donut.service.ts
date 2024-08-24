import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {tap, of, map, catchError, throwError} from "rxjs";

import {Donut} from "../models/donut.model";

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  private donuts: Donut[] = [];

  constructor(private http: HttpClient) { }

  read(){

    if (this.donuts.length)
    {
      return of(this.donuts);
    }

    return this.http.get<Donut[]>(`/api/donuts`)
      .pipe(
        tap((donuts) => {
          this.donuts = donuts;
        }),
        catchError(this.handleError)
      );
  }

  readOne(id: string)
  {
    return this.read().pipe(
      map((donuts) => {

        const donut =donuts.find(donut => donut.id === id)

        if (donut) {
          return donut;
        }

        return { name: '', icon: '', price: 0, description: ''};
      }));
  }

  create(payload: Donut)
  {
    return this.http.post<Donut>(`/api/donuts`, payload)
      .pipe(
        tap((donut) => {
          this.donuts = [...this.donuts, donut];
        }),
        catchError(this.handleError))
  }

  update(payload: Donut)
  {
    return this.http.put<Donut>(`/api/donuts/${payload.id}`, payload)
      .pipe(
        tap((donut) => {

          this.donuts = this.donuts.map( (item: Donut) =>
          {
            if (item.id === donut.id)
            {
              return donut;
            }

            return item;
          });

        }),
        catchError(this.handleError)
      );
  }

  delete(payload: Donut)
  {
    return this.http.delete<Donut>(`/api/donuts/${payload.id}`)
      .pipe(
        tap( (donut) =>{
            this.donuts = this.donuts.filter( (donut: Donut) => donut.id !== payload.id);
          }
        ),
        catchError(this.handleError)
      )
  }

  private handleError(err: HttpErrorResponse) {

    if (err.error instanceof ErrorEvent)
    {
      //client-side
      console.warn('Client', err);
    }
    else {
      //server side
      console.warn('Server', err.status);
    }

    return throwError(() => new Error(err.message));
  }

}
