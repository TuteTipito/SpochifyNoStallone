import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPlayerComponent } from './card-player.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';
import { MOCK_TRACK } from '../mock-track';

describe('CardPlayerComponent', () => {
  let component: CardPlayerComponent;
  let fixture: ComponentFixture<CardPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        CardPlayerComponent,
        ImgBrokenDirective
    ]
})
    .compileComponents();

    fixture = TestBed.createComponent(CardPlayerComponent);
    component = fixture.componentInstance;
    component.track = MOCK_TRACK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
