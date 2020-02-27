import { HostListener, Directive } from '@angular/core';
@Directive({
    selector: '[appInput]'
})


export class inputDropDirective {
    @HostListener('drop', ['$event'])
    onDrop(event) {
        event.preventDefault();
    }
}