import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  interpolation: ['{{', '}}'], //можем сами настраивать интерполяцию, приводит к стрингу
})
export class CardComponent implements OnInit {
  title: string = 'My card title';
  text: string = 'nfdjsnfjasdnfjansdjfdsa';
  textColor: string = 'black';
  age: number = 11;
  array: object = [1, 1, 2, 3, 5, 8, 13];
  obj: object = { name: 'Danila', info: { age: 25, job: 'programmer' } };
  imgUrl: string =
    'https://poeditor.com/blog/wp-content/uploads/2017/03/angular.png';
  disabled: boolean = false;

  ngOnInit() {
    //выз-ся когда компонент стартует/жизн цикл

    setTimeout(() => {
      this.disabled = true;
      this.imgUrl =
        'https://fc-wordpress-blog-bucket.s3.us-west-2.amazonaws.com/wp-content/uploads/2020/09/22081956/320px-React-icon.svg_.png';
    }, 3000);
  }
  changeTitle() {
    this.title = 'Title changed';
  }
  getInfo(): string {
    //тип возвращаемый
    return 'this is my info';
  }
  inputHandler(event: any) {
    console.log(event);
    const value = event.target.value;
    this.title = value;
  }
  ageHandler(value: any) {
    this.age = value;
  }
  changeHandler() {
    console.log(this.title);
  }
}
