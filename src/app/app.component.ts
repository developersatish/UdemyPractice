import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post("api", postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.http
      .get("api")
      .pipe(
        map(responseData => {
          const resultArr = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              resultArr.push({ ...responseData[key], id: key });
            }
          }
          return resultArr;
        })
      )
      .subscribe(post => {
        console.log(post);
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
