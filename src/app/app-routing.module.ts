import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayAssetDataComponent } from './display-asset-data/display-asset-data.component';
import { InputAssetDataComponent } from './input-asset-data/input-asset-data.component';

const routes: Routes = [
  {
    path: '',
    component: InputAssetDataComponent,
  },
  {
  path: 'listAsset',
  component: DisplayAssetDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
