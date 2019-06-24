import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  allPosts=[
    {
      id: '1',
      body: 'mam fajnego motora',
      author: {
        name: 'noname'
      },
      images: ["https://picsum.photos/200/50"
      ]
    },
    {
      id: '2',
      body: 'mam fajnego samochoda',
      author: {
        name: 'noname2'
      },
      images: ["https://picsum.photos/200/50"
      ]
    },
    {
      id: '3',
      body: 'mam fajnego samolota',
      author: {
        name: 'noname3'
      },
      images: ["https://picsum.photos/200/50"
      ]
    }
  ]


  constructor() { }

  ngOnInit() {
  }

}
