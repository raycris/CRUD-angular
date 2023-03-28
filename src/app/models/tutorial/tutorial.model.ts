import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.model.html',
  styleUrls: ['./tutorial.model.css'],
})
export class TutorialModel {
  id?: any;
  title?: string;
  description?: string;
  published?: boolean;
}
