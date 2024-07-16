import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit ,AfterViewChecked{
  islogin :Boolean = false;
  ngOnInit(): void {
    const token = localStorage.getItem('bankusertoken');
    if(token){
      this.islogin = true;
    }else{
      this.islogin = false;
    }
  }

  ngAfterViewChecked(): void {
    const token = localStorage.getItem('bankusertoken');
    if(token){
      this.islogin = true;
    }else{
      this.islogin = false;
    }
  }
  logout(){
    localStorage.removeItem('bankusertoken');
    localStorage.removeItem('bankuserrole');
    localStorage.removeItem('bankaccountno');
    this.islogin = false;
    window.location.reload();
  }
}
