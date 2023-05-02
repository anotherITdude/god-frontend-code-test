import create from "./http-service";

export interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

export default create("/api/cars.json");
