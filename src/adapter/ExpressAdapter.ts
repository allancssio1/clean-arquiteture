export default class ExpressAdapter {
  static create(fn) {
    return async function (request, response) {
      const obj = await fn(request.params, request.body)
      response.json(obj)
    }
  }
}
