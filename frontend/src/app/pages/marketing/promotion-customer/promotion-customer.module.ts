import { SharedModule } from "src/app/@shared/shared.module";
// import { BasicFormPromModule } from "../promotions/basic-form/basic-form.module";
import { DataTableModule } from "ng-devui";
import { PromotionCustomerComponent } from "./promotion-customer.component";
import { NgModule } from "@angular/core";
import { BasicFormPromCustomerModule } from "./basic-form/basic-form.module";

@NgModule({
    declarations: [
      PromotionCustomerComponent
    ],
    imports: [
      SharedModule,
      BasicFormPromCustomerModule,
      DataTableModule,
    ],
    exports: [
      PromotionCustomerComponent
    ]
})

export class PromotionCustomerModule { }