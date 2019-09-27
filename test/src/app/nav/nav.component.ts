import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title="Angular";

  constructor() { }

  ngOnInit() {
    $('a').on('click', function(){
    if(this.id==="home"){
      if(this.className!="active"){
        $('a').removeClass('selected');
        $(this).addClass('active');
      }
    }else{
      $('a').removeClass('selected');
      $('a').removeClass('active');
      $(this).addClass('selected');  
    }
  });
}

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }
}
