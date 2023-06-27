import { Component ,OnInit} from '@angular/core';
import { FormGroup , FormControl,Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'reactiveforms';
formsignup !: FormGroup;
  constructor(private fb: FormBuilder){

  }
  ngOnInit(): void {
    this.formsignup=this.fb.group({
      'username': new FormControl([Validators.minLength(5),Validators.maxLength(10),Validators.required]),
     'password': new FormControl([Validators.minLength(8),Validators.maxLength(15),Validators.required]) 
    })
      
  }
  Submit()
  {
    console.log(this.formsignup);
    
  }
  get username()
  {
    return this.formsignup.get('username');
  }
  get password()
  {
    return this.formsignup.get('password')
  }

}

  // formsignup!: FormGroup;
  // ngOnInit(): void {
  //     this.formsignup=new FormGroup({
  //       'username': new FormControl(null,[Validators.minLength(5),Validators.maxLength(10),Validators.required]),        //this is the code of formgroup
  //       'password': new FormControl(null,[Validators.minLength(8),Validators.maxLength(15),Validators.required])         //this is the code of formgroup

  //     })
  // }
  // Submit()
  // {
  //   console.log(this.formsignup);
    
  // }
  // get username()
  // {
  //   return this.formsignup.get('username');
  // }
  // get password()
  // {
  //   return this.formsignup.get('password')
  // }


