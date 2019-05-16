import { BaseService } from "./base/base.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class FileService extends BaseService {
    constructor(http: HttpClient) {
        super(http, 'receivefile')
    }
}