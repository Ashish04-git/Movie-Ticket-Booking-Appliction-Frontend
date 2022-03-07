import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ViewuserbyidComponent } from './viewuserbyid/viewuserbyid.component';
import { UserComponent } from './user/user.component';
import { ViewcustComponent } from './viewcust/viewcust.component';
import { AddcustComponent } from './addcust/addcust.component';
import { UpdatecustComponent } from './updatecust/updatecust.component';
import { CustbyidComponent } from './custbyid/custbyid.component';
import { CustbymovieidComponent } from './custbymovieid/custbymovieid.component';
import { MovieComponent } from './movie/movie.component';
import { ShowComponent } from './show/show.component';
import { ViewshowsComponent } from './viewshows/viewshows.component';
import { AddshowComponent } from './addshow/addshow.component';
import { ViewshowbytheatreidComponent } from './viewshowbytheatreid/viewshowbytheatreid.component';
import { ViewshowbydateComponent } from './viewshowbydate/viewshowbydate.component';
import { UpdateshowComponent } from './updateshow/updateshow.component';
import { DeleteshowComponent } from './deleteshow/deleteshow.component';
import { DeletecustComponent } from './deletecust/deletecust.component';
import { ViewmoviesComponent } from './viewmovies/viewmovies.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { ViewmoviebyidComponent } from './viewmoviebyid/viewmoviebyid.component';
import { ViewmoviebytheatreidComponent } from './viewmoviebytheatreid/viewmoviebytheatreid.component';
import { UpdatemovieComponent } from './updatemovie/updatemovie.component';
import { DeletemovieComponent } from './deletemovie/deletemovie.component';
import { ViewseatsComponent } from './viewseats/viewseats.component';
import { SeatComponent } from './seat/seat.component';
import { AddseatComponent } from './addseat/addseat.component';
import { DeleteseatComponent } from './deleteseat/deleteseat.component';
import { ViewbookingsComponent } from './viewbookings/viewbookings.component';
import { BookingComponent } from './booking/booking.component';
import { ViewbookingbymovieidComponent } from './viewbookingbymovieid/viewbookingbymovieid.component';
import { ViewbookingbyshowidComponent } from './viewbookingbyshowid/viewbookingbyshowid.component';
import { ViewbookingbydateComponent } from './viewbookingbydate/viewbookingbydate.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { AddbookingComponent } from './addbooking/addbooking.component';
import { ViewbookingcostComponent } from './viewbookingcost/viewbookingcost.component';
import { DeletebookingComponent } from './deletebooking/deletebooking.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { AuthenticationGuard } from './authentication.guard';
import { DashboarduserComponent } from './dashboarduser/dashboarduser.component';
import { MovieuserComponent } from './movieuser/movieuser.component';
import { ShowuserComponent } from './showuser/showuser.component';
import { BookinguserComponent } from './bookinguser/bookinguser.component';
import { BlockseatComponent } from './blockseat/blockseat.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewuserComponent,
    LoginComponent,
    CustomerComponent,
    AdduserComponent,
    DeleteuserComponent,
    ViewuserbyidComponent,
    UserComponent,
    ViewcustComponent,
    AddcustComponent,
    UpdatecustComponent,
    CustbyidComponent,
    CustbymovieidComponent,
    MovieComponent,
    ShowComponent,
    ViewshowsComponent,
    AddshowComponent,
    ViewshowbytheatreidComponent,
    ViewshowbydateComponent,
    UpdateshowComponent,
    DeleteshowComponent,
    DeletecustComponent,
    ViewmoviesComponent,
    AddmovieComponent,
    ViewmoviebyidComponent,
    ViewmoviebytheatreidComponent,
    UpdatemovieComponent,
    DeletemovieComponent,
    ViewseatsComponent,
    SeatComponent,
    AddseatComponent,
    DeleteseatComponent,
    ViewbookingsComponent,
    BookingComponent,
    ViewbookingbymovieidComponent,
    ViewbookingbyshowidComponent,
    ViewbookingbydateComponent,
    UpdatebookingComponent,
    AddbookingComponent,
    ViewbookingcostComponent,
    DeletebookingComponent,
    TestcomponentComponent,
    DashboardComponent,
    LandingComponent,
    LoginuserComponent,
    DashboarduserComponent,
    MovieuserComponent,
    ShowuserComponent,
    BookinguserComponent,
    BlockseatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
