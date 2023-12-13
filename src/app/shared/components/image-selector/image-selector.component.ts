import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageService } from './image.service';
import { response } from 'express';

@Component({
  selector: 'app-image-selector',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './image-selector.component.html',
  styleUrl: './image-selector.component.css',
})
export class ImageSelectorComponent {
  private file?: File;
  fileName: string = '';
  title: string = '';
  constructor(private imageService: ImageService) {}
  onFileUploadChange(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    this.file = element.files?.[0];
  }

  uploadImage(): void {
    if (this.file && this.fileName != '' && this.title != '') {
      //Image service to upload the image
      this.imageService.uploadImage(this.file, this.fileName, this.title)
      .subscribe({
        next:(response)=>{
          console.log(response);
        }
      });
    }
  }
}
