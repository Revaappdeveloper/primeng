import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmapPrimengComponent } from './gmap-primeng.component';

describe('GmapPrimengComponent', () => {
  let component: GmapPrimengComponent;
  let fixture: ComponentFixture<GmapPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
