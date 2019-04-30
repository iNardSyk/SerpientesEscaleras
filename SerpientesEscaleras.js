class Tablero{
    constructor(){
        this._tablero = [0,0,+58,0,0,+41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,+21,0,0,0,0,0,0,0,0,0,0,0,0,+41,0,0,0,0,-47,+43,0,0,0,0,0,0,0,0,0,+22,0,0,0,0,0,0,-13,0,0,0,0,0,0,0,0,0,0,0,0,-65,0,0,0,0,0,0,0,0,0,0,0,-50,0,0,0,0,-62,0,0];
        this._jugadores = [];
    }

    set jugador(jugador){
        this._jugadores.push(jugador);
    }

    getJugador(num){
        return this._jugadores[num-1];
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

    girarDado(){
        var dado = Math.floor(Math.random() * (7 - 1)) + 1;
        console.log("El dado ha caido en " + dado);
        return dado;
    }

    moverJugador(){
        var avance = this._posicion + this.girarDado();
        this._posicion = avance + game1._tablero[avance];
        console.log("El jugador " + this._nombre + " está en la casilla " + (this._posicion + 1));
    }
}

var game1 = new Tablero();

var p1 = new Jugador("Nardo", "Perro");
var p2 = new Jugador("Diana", "Luna");

game1.jugador = p1;
game1.jugador = p2;

console.log("El jugador " + game1.getJugador(1)._nombre + " está en la casilla " +  game1.getJugador(1)._posicion);
console.log("El jugador " + game1.getJugador(2)._nombre + " está en la casilla " +  game1.getJugador(2)._posicion);

game1.getJugador(1).moverJugador();
game1.getJugador(2).moverJugador();

game1.getJugador(1).moverJugador();
game1.getJugador(2).moverJugador();

game1.getJugador(1).moverJugador();
game1.getJugador(2).moverJugador();

game1.getJugador(1).moverJugador();
game1.getJugador(2).moverJugador();

game1.getJugador(1).moverJugador();
game1.getJugador(2).moverJugador();

game1.getJugador(1).moverJugador();
game1.getJugador(2).moverJugador();

game1.getJugador(1).moverJugador();
game1.getJugador(2).moverJugador();

