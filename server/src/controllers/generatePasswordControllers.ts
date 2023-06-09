import { Request, Response } from "express"
import generatePasswordService from "../services/generatePasswordServices"

async function createPassword(req: Request, res: Response): Promise<Response> {
  const { length } = req.body
  try {
    const password = await generatePasswordService.createPassword(length)
    return res.status(201).send({ password })
  } catch (err) {
    return res.status(500).send((err as Error).message)
  }
}

export default {
  createPassword,
}
