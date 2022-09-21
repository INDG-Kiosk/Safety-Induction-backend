export const axioDefaultConfig = {
  method: 'get',
  url: 'https://localhost:44321/api/contractors',
  data: {},
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: function (status) {
    return status >= 200 && status < 400 // default
  },
}
