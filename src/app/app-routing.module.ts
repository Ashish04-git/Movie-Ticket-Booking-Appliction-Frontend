import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { AddcustComponent } from './addcust/addcust.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { AddseatComponent } from './addseat/addseat.component';
import { AddshowComponent } from './addshow/addshow.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { AuthenticationGuard } from './authentication.guard';
import { BlockseatComponent } from './blockseat/blockseat.component';
import { BookingComponent } from './booking/booking.component';
import { BookinguserComponent } from './bookinguser/bookinguser.component';
import { CustbyidComponent } from './custbyid/custbyid.component';
import { CustbymovieidComponent } from './custbymovieid/custbymovieid.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { DeletebookingComponent } from './deletebooking/deletebooking.component';
import { DeletecustComponent } from './deletecust/deletecust.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { DeleteseatComponent } from './deleteseat/deleteseat.component';
import { DeleteshowComponent } from './deleteshow/deleteshow.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { MovieComponent } from './movie/movie.component';
import { MovieuserComponent } from './movieuser/movieuser.component';
import { SeatComponent } from './seat/seat.component';
import { ShowComponent } from './show/show.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { UpdatecustComponent } from './updatecust/updatecust.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { UpdateshowComponent } from './updateshow/updateshow.component';
import { UserComponent } from './user/user.component';
import { ViewbookingbydateComponent } from './viewbookingbydate/viewbookingbydate.component';
import { ViewbookingbymovieidComponent } from './viewbookingbymovieid/viewbookingbymovieid.component';
import { ViewbookingbyshowidComponent } from './viewbookingbyshowid/viewbookingbyshowid.component';
import { ViewbookingcostComponent } from './viewbookingcost/viewbookingcost.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { ViewcustComponent } from './viewcust/viewcust.component';
import { ViewmoviebyidComponent } from './viewmoviebyid/viewmoviebyid.component';
import { ViewmoviebytheatreidComponent } from './viewmoviebytheatreid/viewmoviebytheatreid.component';
import { ViewmoviesComponent } from './viewmovies/viewmovies.component';
import { ViewseatsComponent } from './viewseats/viewseats.component';
import { ViewshowbydateComponent } from './viewshowbydate/viewshowbydate.component';
import { ViewshowbytheatreidComponent } from './viewshowbytheatreid/viewshowbytheatreid.component';
import { ViewshowsComponent } from './viewshows/viewshows.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { ViewuserbyidComponent } from './viewuserbyid/viewuserbyid.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'loginuser',
    component: LoginuserComponent
  },
  {
    path: '',
    component: LandingComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboarduser',
    component: DashboarduserComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'viewuser',
    component: ViewuserComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'adduser',
    component: AdduserComponent
  },
  {
    path: 'deleteuser',
    component: DeleteuserComponent
  },
  {
    path: 'viewuserbyid',
    component: ViewuserbyidComponent
  },
  {
    path:'user',
    component: UserComponent
  },
  {
    path:'customer',
    component: CustomerComponent
  },
  {
    path: 'viewcust',
    component: ViewcustComponent
  },
  {
    path:'addcust',
    component: AddcustComponent
  },
  {
    path: 'viewcustbyid',
    component: CustbyidComponent
  },
  {
    path: 'updatecust',
    component: UpdatecustComponent
  },
  {
    path: 'deletecust',
    component: DeletecustComponent
  },
  {
    path: 'viewcustbymovieid',
    component: CustbymovieidComponent
  },{
    path: 'movie',
    component: MovieComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movieuser',
    component: MovieuserComponent,
    canActivate:[AuthenticationGuard]
  },
  {
    path: 'show',
    component: ShowComponent
  },
  {
    path: 'showuser',
    component: ShowuserComponent
  },
  {
    path: 'viewshows',
    component: ViewshowsComponent
  },
  {
    path: 'addshow',
    component: AddshowComponent
  },
  {
    path: 'viewshowbytheid',
    component: ViewshowbytheatreidComponent
  },
  {
    path: 'viewshowbydate',
    component: ViewshowbydateComponent
  },
  {
    path: 'updateshow',
    component: UpdateshowComponent
  },
  {
    path: 'deleteshow',
    component: DeleteshowComponent
  },
  {
    path: 'viewmovies',
    component: ViewmoviesComponent
  },
  {
    path: 'addmovie',
    component: AddmovieComponent
  },
  {
    path: 'viewmoviebyid',
    component: ViewmoviebyidComponent
  },
  {
    path: 'viewmoviebytheatreid',
    component: ViewmoviebytheatreidComponent
  },
  {
    path: 'updatemovie',
    component: UpdatemovieComponent
  },
  {
    path: 'deletemovie',
    component: DeletemovieComponent
  },
  {
    path: 'seat',
    component: SeatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'viewseats',
    component: ViewseatsComponent
  },
  {
    path: 'addseat',
    component: AddseatComponent
  },
  {
    path: 'deleteseat',
    component: DeleteseatComponent
  },
  {
    path: 'blockseat',
    component: BlockseatComponent
  },
  {
    path:'booking',
    component: BookingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'bookinguser',
    component: BookinguserComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'viewbookings',
    component: ViewbookingsComponent
  },
  {
    path: 'viewbookingbymovieid',
    component: ViewbookingbymovieidComponent
  },
  {
    path: 'viewbookingbyshowid',
    component: ViewbookingbyshowidComponent
  },
  {
    path: 'viewbookingbydate',
    component: ViewbookingbydateComponent
  },
  {
    path: 'updatebooking',
    component: UpdatebookingComponent
  },
  {
    path: 'addbooking',
    component: AddbookingComponent
  },
  {
    path: 'viewbookingbycost',
    component: ViewbookingcostComponent
  },
  {
    path: 'deletebooking',
    component: DeletebookingComponent
  },
  {
    path: 'test',
    component: TestcomponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
