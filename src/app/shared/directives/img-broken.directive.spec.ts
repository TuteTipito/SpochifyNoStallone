import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MOCK_TRACK } from '@shared/components/mock-track';

//TODO: Componente de prueba
@Component({ template: '<img class="testing-directive" appImgBroken [src]="track.cover" >' })
class TestComponent {
  public track = MOCK_TRACK;
}

//TODO La prueba de ImgBroken es la siguiente

describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach( () => {
    TestBed.configureTestingModule({
    imports: [TestComponent,
        ImgBrokenDirective]
})

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  //TODO Deberia instanciar correctamente
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });


  it('TestComponent deberia instanciarse correctamente', () => {
    expect(component).toBeTruthy()
  })

/*   it('directiva deberia cambiar la imagen', (done: DoneFn) => {
    //TODO: Arrange
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src
    component.srcMock = undefined

    setTimeout(() => {
      const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
      const afterImgSrc = beforeImgElement.src

      expect(afterImgElement.src).toBe('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png')
      done()
    }, 3000)
  }) */

  it('debería cambiar la imagen si falla la carga', (done: DoneFn) => {
    const imgDebugEl = fixture.debugElement.query(By.css('.testing-directive'));
    const imgEl: HTMLImageElement = imgDebugEl.nativeElement;

    // Simulamos error de carga
    imgEl.dispatchEvent(new Event('error'));

    setTimeout(() => {
      expect(imgEl.src).toBe('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png');
      done();
    }, 0); // No hace falta esperar 3 segundos
  });
});