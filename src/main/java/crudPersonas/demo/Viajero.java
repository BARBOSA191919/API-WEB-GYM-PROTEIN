package crudPersonas.demo;


public class Viajero {
    // Atributos de la clase Viajero
    private String nombre;
    private Vuelo vuelo; // Vuelo al que está suscrito el viajero

    // Constructor de la clase Viajero
    public Viajero(String nombre, Vuelo vuelo) {
        this.nombre = nombre;
        this.vuelo = vuelo; // Asignación del vuelo al que está suscrito el viajero
    }

    public void notificar() {
        // Imprimir mensaje de notificación con el nombre del viajero y el último suceso del vuelo
        System.out.println(nombre + "<-- Notificar: " + vuelo.getUltimoSuceso());
    }
}