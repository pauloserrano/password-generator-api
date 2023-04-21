import joi from "joi"
import { ICreatePassword } from "../interfaces/ICreatePassword"

export const passwordCreateDataSchema = joi.object<ICreatePassword>({
  length: joi.number().required(),
})
