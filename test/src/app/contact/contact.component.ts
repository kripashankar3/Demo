import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router) { }

  toHome(){
    this.router.navigate(['/']);
  }

  ngOnInit() {
    $('button').on('click', function(){
        $('a').removeClass('selected');
        this.$('a').addClass('active');
    });
  }

}
