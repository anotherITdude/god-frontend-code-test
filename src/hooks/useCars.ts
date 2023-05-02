import { useState, useEffect } from "react";
import carService, { Car } from "../services/car-service";

const useCars = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [error, setError] = useState("");
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    isLoading(true);
    const { request, cancle } = carService.getAll<Car>();
    request
      .then((response) => {
        setCars(response.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        isLoading(false);
      });
    return () => cancle();
  }, []);
  return { cars, error, loading, setCars, setError, isLoading };
};

export default useCars;