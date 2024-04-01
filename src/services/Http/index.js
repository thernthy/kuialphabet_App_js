import axios from "axios"

export const httpClient = axios.create({
  baseURL: `https://www.kotv-001.com`,
})
const qs = require('qs');
let data = qs.stringify({
  'secret': 'b612a1519943239888ad149193c6e17b' 
});

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.kotv-001.com/comic?token=.xLU2hPgsarS6&filter=all',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'X-API-Key': '12345678910', 
    'Cookie': 'XSRF-TOKEN=eyJpdiI6IkQ0c0FockJYTHZjSlpKYm1Ba0dMelE9PSIsInZhbHVlIjoiVFd6bG1ZMXlDcnBJb3ppT1JjWFpIWi8rZ1h4cDhEc3hXVEdnVitUcmJTdnp6amR2MWNuanh3UnhHQkMyYlBYOVpKYzVLZUVmMUdRTVhDaVFtUGxocnpzY0hJNTVncWFmWVdpQTcxR0FTSG9sekhsZjg1SHBWOXVkVEpSM1ljSEUiLCJtYWMiOiJiMmI4Nzc4MjJmNzc2OTZkMDNmYmNjZjVjMWIyZTU4ODkxZGM1ZjNlODNhMDNmMGJiZGJhMzBlMTYyNDY2ZjExIn0%3D; kotv_001_session=eyJpdiI6InBZZzVFVFlWd2lSdXJ0Sk53T055ZVE9PSIsInZhbHVlIjoiUWc4NEN5eFloK2VtVXl5VGF2RXFrdnFta25odnpMQTloanhSV0gwTWsvWkthUzR2aU1XQ3pDc0dvcldXZlkyTTYrNk1yMFEzUUdzWk0vRWJwMmlwb0tuRXltMnRVM1ZBUzFVTkFMbDN2cU9KSXNYU2hlWTNRWWxwN00xdXd2eVYiLCJtYWMiOiI1Y2I1NTY4Zjc4ODA0MDg2ZGU1YTk2YzE2ZGU1OWFkZmUyMDcxNGRkZmJkMGY1ZTc3ZjQ0ODhlOTBkMDIxZjAyIn0%3D'
  },
  data : data
};

httpClient.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
