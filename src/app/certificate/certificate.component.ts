import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {
  title = 'html-to-pdf-angular-application';

  constructor() { }

  ngOnInit(): void {
    
  
  }

  convetToPDF()
  {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 220;
    var pageHeight = 200;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    
    const contentDataURL = canvas.toDataURL('../../assets/d12.jpg')
    delay(1000);
    let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'JPG', 0, position, imgWidth, imgHeight)
    delay(1000);
    pdf.save('new-file.pdf'); // Generated PDF
    });
  }

}
