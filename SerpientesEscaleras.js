class Juego{
    constructor(tablero, dado){
        this._tablero = tablero;
        this._jugadores = [];
        this._dado = dado;
        this._ganador = false;
    }

    iniciarJuego(){
        this.agregarJugadores();
        while (this._ganador == false){            
            this.ronda();
        }
    }

    agregarJugadores(){
        var participantes = prompt("¿Cuántos jugadores desea registrar?");
            for (let index = 0; index < participantes; index++) {
                let nombre = prompt("Nombre del jugador: ");
                let jugadorNuevo = new Jugador(nombre);
                this._jugadores.push(jugadorNuevo);
            }
    }

    moverJugador(index){
        var avance = this._jugadores[index].posicion + this._dado.girar();
        if (avance >= 100) {
            this._ganador = true;
            console.log("El jugador " + this._jugadores[index].nombre + " ha ganado");
            return;
        } else {
            this._jugadores[index].posicion = avance + this._tablero.casillas[avance];
            console.log("El jugador " + this._jugadores[index].nombre + " está en la casilla " + (this._jugadores[index].posicion + 1));
        }
    }

    ronda(){
        for (let index = 0; index < this._jugadores.length; index++) {
            this.moverJugador(index);
        }
    }
}

class Tablero{
    constructor(){
        this._casillas = [0,0,+58,0,0,+41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,+21,0,0,0,0,0,0,0,0,0,0,0,0,+41,0,0,0,0,-47,+43,0,0,0,0,0,0,0,0,0,+22,0,0,0,0,0,0,-13,0,0,0,0,0,0,0,0,0,0,0,0,-65,0,0,0,0,0,0,0,0,0,0,0,-50,0,0,0,0,-62,0,0];
    }

    get casillas(){
        return this._casillas;
    }
}

class Dado{
    constructor(max, min){
        this.max = max + 1;
        this.min = min;
    }

    girar(){
        var dado = Math.floor(Math.random() * (this.max - this.min)) + this.min;
        console.log("El dado ha caido en " + dado);
        return dado;
    }
}

class Jugador{
    constructor(nombre) {
        this._nombre = nombre;
        this._posicion = -1;
    }

    set posicion(nuevaPos){
        this._posicion = nuevaPos;
    }

    get posicion(){
        return this._posicion;
    }
    
    get nombre(){
        return this._nombre;
    }
}

var dado1 = new Dado(6,1);
var tablero1 = new Tablero();
var game1 = new Juego(tablero1, dado1);

game1.iniciarJuego()