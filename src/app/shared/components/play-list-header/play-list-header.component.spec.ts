import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListHeaderComponent } from './play-list-header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlayListHeaderComponent', () => {
  let component: PlayListHeaderComponent;
  let fixture: ComponentFixture<PlayListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [PlayListHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
