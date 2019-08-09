import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-vids',
  templateUrl: './search-vids.component.html',
  styleUrls: ['./search-vids.component.css']
})
export class SearchVidsComponent implements OnInit, OnDestroy {
  home = faHome;

  searchString: any;
  results$ = new Observable<any>();
  searchSubject$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.results$ = this.searchSubject$.pipe(
      debounceTime(500),
      switchMap(searchString => this.callAPI(searchString))
    );
  }

  callAPI(searchString) {
    return this.http
      .get(`https://www.reddit.com/r/videos/search.json?q=${searchString}`)
      .pipe(map(result => result['data']['children']));
  }

  onSearch(event) {
    this.searchSubject$.next(event);
  }

  ngOnDestroy() {
    this.searchSubject$.unsubscribe();
  }
}
