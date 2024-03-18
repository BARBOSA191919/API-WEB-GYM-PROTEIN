package crudPersonas.demo;


public class Main {
    // Método principal main, punto de entrada de la aplicación
    public static void main(String[] args) {
        // Crea una instancia de la clase Vuelo con código de destino "IB123 destino París"
        Vuelo vuelo = new Vuelo("IB123 destino París");

        // Crea una instancia de la clase Viajero con nombre "Oscar" y suscribirlo al vuelo
        Viajero oscar = new Viajero("Oscar", vuelo);
        vuelo.suscribirObservador(oscar);

        // Crea una instancia de la clase Viajero con nombre "Pepe" y suscribirlo al vuelo
        Viajero pepe = new Viajero("Pepe", vuelo);
        vuelo.suscribirObservador(pepe);

        vuelo.setUltimoSuceso("Llegada del vuelo exitoso.");

        // Eliminar la suscripción de "Pepe" al vuelo
        vuelo.eliminarObservador(pepe);

        // Establecer el último suceso del vuelo y notifica a los viajeros restantes
        vuelo.setUltimoSuceso("Salida de viajeros");
    }
}


