export default class HapiAdapter {
  static create(fn) {
    return async function (request, response) {
      const obj = await fn(request.params, request.payload)
      return obj
    }
  }
}
