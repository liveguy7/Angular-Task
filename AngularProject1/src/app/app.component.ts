import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  classesToApply: string = 'italicsClass';
  applyBoldClass: boolean = true;
  applyItalicsClass: boolean = true;
  isBold: boolean = true;
  fontSize: number = 30;
  isItalic: boolean = true;

  onClick(): void {
    console.log("Button Clicked");
  }

  addStyles() {
  let styles = {
    'font-size.px': this.fontSize,
    'font-style': this.isItalic ? "italic" : "normal",
    'font-weight': this.isBold ? "bold" : "normal"
  };
  return styles;
}


  addClasses() {
    let classes = {
      boldClass: this.applyBoldClass,
      italicsClass: this.applyItalicsClass

    };
    return classes;
  }

}
