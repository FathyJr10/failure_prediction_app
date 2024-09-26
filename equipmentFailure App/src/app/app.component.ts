import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'equipmentFailure';

  formData = {
    operating_hours: null,
    temperature: null,
    humidity: null,
    time_since_last_maintenance: null,
    Category: null
  };

  prediction: number | null = null;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<any>('http://127.0.0.1:5000/predict', this.formData)
      .subscribe(response => {
        this.prediction = response.prediction;  // Check this line
        console.log(this.prediction);  // Log the prediction to check if it's correctly 0 or 1
  
        // Show the modal after receiving the prediction
      });
  }
  
  
}



