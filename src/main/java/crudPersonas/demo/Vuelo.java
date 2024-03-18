package crudPersonas.demo;

import java.util.ArrayList;
import java.util.List;

// Ejemplo observador: que cualquier viajero se pueda suscribir a un vuelo,
// para recibir las notificaciones que se vayan generando sobre él.

public class Vuelo {
    // Atributos de la clase Vuelo
    private String codigoDestino;
    private List<Viajero> viajeros; // Lista de viajeros suscritos al vuelo
    private String ultimoSuceso;

    // Constructor de la clase Vuelo
    public Vuelo(String codigoDestino) {
        this.codigoDestino = codigoDestino;
        viajeros = new ArrayList<Viajero>(); // Creación de la lista de viajeros
        ultimoSuceso = ""; // asignación del último suceso como cadena vacía
    }

    // Método para suscribir un viajero al vuelo
    public void suscribirObservador(Viajero viajero) {
        viajeros.add(viajero); // Se añade el viajero a la lista de suscriptores
    }

    public void eliminarObservador(Viajero viajero) {
        viajeros.remove(viajero); // Se elimina el viajero de la lista de suscriptores
    }

    public void notificarObservadores() {
        for (Viajero viajero : viajeros) // Se itera sobre todos los viajeros suscritos
            viajero.notificar(); // Se notifica a cada viajero
    }

    // Se retorna el código de destino concatenado con el último suceso
    public String getUltimoSuceso() {
        return codigoDestino + ":" + ultimoSuceso;
    }

    public void setUltimoSuceso(String ultimoSuceso) {
        this.ultimoSuceso = ultimoSuceso;
        notificarObservadores(); // Se notifica a los viajeros suscritos
    }
}