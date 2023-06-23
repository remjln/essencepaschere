import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {GasStationsGetterService} from "./gas-stations-getter.service";

const routes: Routes = [];

@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule],
    providers: [GasStationsGetterService],
})
export class AppRoutingModule { }
