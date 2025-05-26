import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-document',
  templateUrl: './upload-document.component.html',
})
export class UploadDocumentComponent {
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.http.post('http://localhost:4000/api/documents', formData).subscribe(
      (res) => console.log('Respuesta del backend:', res),
      (err) => console.error('Error:', err)
    );
  }
}

