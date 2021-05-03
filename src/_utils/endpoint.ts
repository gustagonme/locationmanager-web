export class Endpoint {

    /**
      * Clase que parametriza los endpoint de los servicios.
    */

    private serviceLocations: string;


    constructor() {

        this.serviceLocations = "http://192.168.100.49:3000/api";

    }

    // Método para obtener el endpoint para la consulta de locaciones.
    public getServicesEndpoint(): string {
        return this.serviceLocations;
    }


}