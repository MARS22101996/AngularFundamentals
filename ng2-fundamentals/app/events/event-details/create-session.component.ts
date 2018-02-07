import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ISession } from "../index";

@Component({
    templateUrl: 'app/events/event-details/create-session.component.html',
    styles: [`
   em { float: right; color#E05C65; padding-left: 10px;}
   .error input, .error select { background-color: pink;}
   .error textarea { background-color: pink;}
  `]
})

export class CreateSessionComponent implements OnInit{
    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl

  ngOnInit() {
      this.name = new FormControl('', Validators.required)
      this.presenter = new FormControl('', Validators.required)
      this.duration = new FormControl('', Validators.required)
      this.level = new FormControl('', Validators.required)
      this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedWords(['foo', 'bar'])])

      this.newSessionForm = new FormGroup({
          name: this.name,
          presenter: this.presenter,
          duration: this.duration,
          level: this.level,
          abstract: this.abstract,
      })
  }

  saveSession(formValues){
      let session: ISession = {
          id: undefined,
          name: formValues.name,
          presenter: formValues.presenter,
          duration: +formValues.duration,
          level: formValues.level,
          abstract: formValues.abstract,
          voters: []
      }
        console.log(session)
  }

  private restrictedWords(words) {
      return (control: FormControl): { [key: string]: any } => {
          
          if(!words) return null

          var invalidWords = words
          .map( w => control.value.includes(w) ? w: null)
          .filter(w => w != null)

          return invalidWords && invalidWords.length > 0
              ? { 'restrictedWords': invalidWords.join(', ')}
              : null
      }
  }
}