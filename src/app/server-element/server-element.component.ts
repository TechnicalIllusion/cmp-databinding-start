import { Component,
             OnInit,
             Input,
             OnChanges,
             SimpleChanges,
             DoCheck,
             AfterContentInit,
             AfterContentChecked,
             AfterViewInit,
             AfterViewChecked,
             OnDestroy,
             ViewChild,
             ElementRef,
             ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: false}) paragraph: ElementRef;
  constructor() {
    console.log('constructor called!');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('onChanges called!');
    console.log(changes);
  }
  ngOnInit() {
    console.log('onInit called!');
    // console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck Called.');
  }

  ngAfterContentInit() {
    console.log('AfterContentInit Called!');
    console.log('Text content of paragraph: ' + this.paragraph.nativeElement.textContent);

  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked Called!');
  }

  ngAfterViewInit() {
    console.log('AfterContentInit Called!');
    console.log('Text = ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('AfterContentChecked Called!');
  }

  ngOnDestroy() {
    console.log('OnDestroy Called!');
  }
}
