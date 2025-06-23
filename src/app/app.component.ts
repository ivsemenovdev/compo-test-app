import { Component } from '@angular/core';
import { ProductPageComponent } from "./components/product-page/product-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ProductPageComponent]
})
export class AppComponent {
}
