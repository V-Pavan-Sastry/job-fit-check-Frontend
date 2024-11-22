import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
  private apiUrl = 'https://jobfitcheckbackendapi007.vercel.app/upload';

  constructor(private http: HttpClient) { }

  uploadFile(file: File, jobDescription: string,apiKey:string): Observable<any> {
    // Create a FormData object to handle multipart data
    const formData = new FormData();
    formData.append('resume', file, file.name); // Attach the file
    formData.append('jobdesc', jobDescription); // Attach the job description
    formData.append('apiKey', apiKey);
    // Define HTTP headers
    const headers = new HttpHeaders({
      Accept: 'application/json', // Specify the response type
    });

    // Make the POST request
    return this.http.post(this.apiUrl, formData, { headers });
  }
}
