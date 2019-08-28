import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndpoint = apiUrl + "/career";

function careerUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getCareers() {
  return http.get(apiUrl + "/career/");
}

export function saveCareer(career) {
  if (career._id) {
    const body = { ...career };
    delete body._id;
    return http.put(careerUrl(career._id), body);
  }
  return http.post(apiEndpoint, career);
}

export function getCareer(id) {
  return http.get(apiUrl + "/career/" + id);
}

export function deleteCareer(id) {
  return http.delete(careerUrl(id));
}
