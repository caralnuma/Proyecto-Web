
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaComponent } from './tabla.component';

describe('TablaComponent', () => {
  let component: TablaComponent;
  let fixture: ComponentFixture<TablaComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});