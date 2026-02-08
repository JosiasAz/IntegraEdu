import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './shared/login-component/login-component';
import { Python } from './pages/python/python';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, Python],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LastDance');
}
