import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {  

  public ctnFees = true;
  
  ngOnInit(): void {        
    // let outer_wrap = <Element>document.querySelector('.outer-wrapper');
    // let header = <Element>document.querySelector('.header');

    //   header.classList.add('sticky-header55');
    //   outer_wrap.classList.add('sticky-header55');       
  }  

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event : any) {      
    let header = <Element>document.querySelector('.header');
    let headerHeight = header.clientHeight;
    
    if (window.pageYOffset > headerHeight) {       
      header.classList.add('sticky');
    } else {      
      header.classList.remove('sticky'); 
    }
  }
  
}
