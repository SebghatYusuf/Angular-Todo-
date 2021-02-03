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
        return this.http.get('https://pixabay.com/api/?key=20022653-0b92ec61ee2185327ea8a9977&q=sex&image_type=photo&safesearch=true');

    }

    search(text: string) {

        console.log('searching for',);
        var url = `https://pixabay.com/api/?key=20022653-0b92ec61ee2185327ea8a9977&q=${text}&image_type=photo&per_page=50`;
        console.log(url)
        return this.http.get(url);


    }






}
