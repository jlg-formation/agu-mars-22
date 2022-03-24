import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

describe('AppComponent', () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), LayoutModule],
      declarations: [AppComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'front'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('front');
  });

  it('should render the home component', fakeAsync(() => {
    fixture.detectChanges();
    router.initialNavigation();
    tick();
    const compiled = fixture.nativeElement as HTMLElement;
    const str = compiled.querySelector('main h1')?.textContent;
    expect(str).toContain('Gérez efficacement votre stock.');
  }));
});
