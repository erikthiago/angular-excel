import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from 'rxjs/operators';

export class BaseService {

    constructor(public http: HttpClient, public api) {
    }

    /** POST: add a new file to the server */
    sendFile(file: any) : Observable<any> {
        const url = `${this.service()}/${this.api}`;
        return this.http.post(url, file, { responseType: 'text' })
            .pipe(tap(), catchError(this.handleError<any>('base service add')));
    }

    protected log(message: string) {
        message = message;
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    protected handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    service(): string {
        var url = environment.endpoint.endsWith("/") ?
            environment.endpoint.substring(0, environment.endpoint.length - 1) : environment.endpoint;

        return url;
    }
}