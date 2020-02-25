import { Component, OnInit } from '@angular/core';
import { LibraryFiltersLayout } from '@project-sunbird/common-consumption';
import { AppSharedService } from '../shared.service';

@Component({
  selector: 'app-demo-filters',
  templateUrl: './demo-filters.component.html',
  styleUrls: ['./demo-filters.component.scss']
})
export class DemoFiltersComponent implements OnInit {
  mimeTypeFilters = ['all', 'video', 'interaction', 'docs'];
  mimeTypeFilterCollection = [
    {
    text : 'All',
    value: 'all'
  }, {
    text : 'Video',
    value: 'video'
  },
  {
    text : 'Interaction',
    value: 'interaction'
  }, {
    text : 'Documents',
    value: 'docs'
  }];
 public mediums = [
    'english',
    'mathematics',
    'geology',
    'biology',
    'zoology',
    'Botany',
    'Environmental Science'
  ];

  classes = [
    'Class 1',
    'Class 2',
    'Class 3',
    'Class 4',
    'Class 5',
    'Class 6',
    'Class 7'
  ]

  mediumLayout = LibraryFiltersLayout.SQUARE;
  classLayout = LibraryFiltersLayout.ROUND;

  constructor(public appSharedService: AppSharedService) { }

  ngOnInit() {
  }

}
