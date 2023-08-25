import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { NgIfNgForComponent } from './ng-if-ng-for/ng-if-ng-for.component';
import { CrudComponent } from './crud/crud.component';
import { AppComponent } from './app.component';
import { PaiComponent } from './components/pai/pai.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'lazy',
    loadChildren: () =>
      import('./modules/lazyloading/lazyloading.module').then(
        (m) => m.LazyloadingModule
      ),
  },

  { path: 'primeiro-component', component: DataBindingComponent },
  { path: 'segundo-component', component: SegundoComponenteComponent },
  { path: 'ngifngfor', component: NgIfNgForComponent },
  { path: 'photos', component: CrudComponent },
  { path: 'pai', component: PaiComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
