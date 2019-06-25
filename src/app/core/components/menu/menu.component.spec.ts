import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { RouterLinkActive } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let $component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MenuComponent 
      ],
      imports: [
        RouterTestingModule
      ]
      
    }
    )
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    $component = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  
  afterEach(()=> {
    $component.remove();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
