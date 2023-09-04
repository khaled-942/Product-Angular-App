import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isloaded?: boolean;
  constructor(private LoaderService: LoaderService) {}

  ngOnInit(): void {
    this.LoaderService.loaderObservable.subscribe((ele)=>{this.isloaded = ele})
  }


}
