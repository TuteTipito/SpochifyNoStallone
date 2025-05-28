import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionGenericComponent } from './section-generic.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('SectionGenericComponent', () => {
  let component: SectionGenericComponent;
  let fixture: ComponentFixture<SectionGenericComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        SectionGenericComponent
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectionGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
