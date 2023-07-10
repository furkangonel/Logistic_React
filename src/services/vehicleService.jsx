import axios from "axios"

export default class VehicleService {

   getVehicles() {
      return axios.get("http://localhost:8080/api/vehicles/getall")
   }

   getByLoadName(loadName) {
      return axios.get("http://localhost:8080/api/vehicles/getByLoadName?loadName=" + loadName)
   }
   addVehicle(typeId) {
      return axios.post("http://localhost:8080/api/vehicles/add" , typeId)
   }

}
