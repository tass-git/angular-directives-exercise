import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { NavigComponent } from "./navig/navig.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, FormsModule, RouterOutlet, HeaderComponent, FooterComponent,MainComponent,NavigComponent ]
})
export class AppComponent {
  title = 'first-app';
  firstName="Surender";
  imagepath="assets/379658713_851655969847334_8712555413175084731_n.jpg";
  defaultV='';
  isapproved=false;
  luckyNumber=0;
  numbers=[
    'one',
    'two',
    'three',
    'four',
    'five',
  'six',
'seven',
'eight',
'nine',
'ten'  ];
chosenNum=1;
defaultcolor="green";
isstyleApplied=false;
highlightColor="white";
disable = false;
clear = true;

range: number[] = Array.from({length: 50}, (v, k) => k + 1);
 
  passVtoComponent(e:Event) {
    console.log((e.target as HTMLInputElement).value);
  }
  changeV(e:Event){
    console.log((e.target as HTMLInputElement).value);

  }
  toggle()
  {
    if(this.defaultV == 'submitted'){
      this.disable = true;
    }
    
  }

  approve(status: boolean)
  {
    this.isapproved=status;
  }

  highlight(color:string)
  {
    this.highlightColor=color;
  }

  togglestyle()
  {
    this.isstyleApplied=!this.isstyleApplied;
  }

  disabled()
  {
    if(this.defaultV == 'submitted'){
      this.disable = true;
    }
    
  }

  calculate(num:number)
  {
    this.chosenNum=num;
    if(num===1)
      {this.clear=true;}
    else{
      this.clear=false;

    }
      }


}
