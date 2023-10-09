import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav() {
    let side = document.getElementById("mySidepanel")!
    side.style.width = "250px";
  }
  
  closeNav() {
   let side = document.getElementById("mySidepanel")!
   side.style.width = "0";
  }

}
