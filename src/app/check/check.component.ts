import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FileUploadModule } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { ReesultsComponent } from '../reesults/reesults.component';
import { ApicallService } from '../apicall.service';
import { HttpClient } from '@angular/common/http';
import { PasswordModule } from 'primeng/password';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-check',
  standalone: true,
  imports: [CardModule,InputTextareaModule,FormsModule,FloatLabelModule,FileUploadModule,CommonModule,ReesultsComponent,PasswordModule,TagModule],
  templateUrl: './check.component.html',
  styleUrl: './check.component.css',
  providers: [HttpClient]
})
export class CheckComponent{

  constructor(private apiservice:ApicallService) {}
  apiKey:any;
  isVisible: boolean = false;
  textValue: string = '';
  buttonLabel: string = 'Upload CV';
  buttonIcon: string = 'pi pi-check';
  isFileSelected: boolean = false;  // Track whether a file is selected
  selectedFile: File | null = null; // Store the selected file
  resdata:any;
  isLoading:boolean =false;

  onButtonClick() {
    if (this.isFileSelected) {
      // If file is already selected, revert button and log file details
      console.log('Selected file:', this.selectedFile);
      this.resetButton();
    } else {
      // Trigger file input click if no file is selected
      const fileInput = document.getElementById('fileInput') as HTMLInputElement;
      fileInput.click();
    }
  }

  onFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      const fileName = this.selectedFile.name;
    this.buttonLabel = fileName.length > 35 ? `${fileName.slice(0, 33)}...` : fileName;
      this.buttonIcon = 'pi pi-upload';
      this.isFileSelected = true;
    }
  }

  resetButton() {
    console.log(this.apiKey)
    if (this.textValue=="") {
      alert("Please Add Job Description to Continue")
      console.log("error")
      return;
    }
    if (this.apiKey=="") {
      alert("Please Enter API-Key to Continue")
      console.log("error")
      return;
    }
    if(this.selectedFile!=null){
      this.isLoading=true
      console.log("Request Made")
      window.scrollTo({ top: 0, behavior: 'smooth' });
    this.apiservice.uploadFile(this.selectedFile,this.textValue,this.apiKey).subscribe({
      next:(data:any)=>{
        this.resdata=data
        console.log(this.resdata)
        this.buttonLabel = 'Upload CV';
        this.buttonIcon = 'pi pi-check';
        this.isFileSelected = false;
        this.selectedFile = null;
        console.log("Job Description \n",this.textValue)
        console.log(this.isVisible)
        this.isLoading=false;
        this.isVisible = !this.isVisible;
        console.log(this.isVisible)
      }
    })
  }
        
  }
}
