import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl:'./body.component.html'
})

export class BodyComponent {
    
    mostrar = true;

    frase: any={
        mensaje: "Wow Gran Juego",
        autor: "Blizzard"
    };

    personajes: string[] = ['Spiderman', 'venom', 'Zelda']

}