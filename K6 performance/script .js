import http from 'k6/http';
import { sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export let options = {
  vus: 5, // virtual users
  duration: '5s', // test duration
};

export default function () {
  const start = new Date().getTime(); // Record start time
  http.get('https://www.google.com');
  const end = new Date().getTime(); // Record end time
  const duration = end - start; // Calculate request duration
  console.log(`Request duration: ${duration}ms`);

  sleep(1);
}

export function handleSummary(data) {
  return {
    "./K6 performance/summary1.html": htmlReport(data),
  };
}
