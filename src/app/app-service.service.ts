import { apiKey } from './creds';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface searchType {
    search: string;
}

@Injectable({
    providedIn: 'root'
})

export class AppServiceService {

    constructor(private http: HttpClient) { }

    getImages() {
        return this.http.get(`https://pixabay.com/api/?key=${apiKey}&q=nature&image_type=photo&safesearch=true`);

    }

    search(text: string) {

        console.log('searching for',);
        var url = `https://pixabay.com/api/?key=${apiKey}&q=${text}&image_type=photo&per_page=50`;
        console.log(url)
        return this.http.get(url);


    }






}
