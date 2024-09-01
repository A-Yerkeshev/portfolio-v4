type Request = {

}

type Response = {
  send: (body: Buffer | string | boolean | Array<any> | Object) => void
}

export {Request, Response}