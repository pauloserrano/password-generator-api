import supertest from "supertest"
import app from "../src/app"
import { wipeDb } from "./helpers"

const api = supertest(app)

beforeAll(() => {
  wipeDb()
})

describe("POST /generate-password", () => {
  it("Should generate a new password when provided with a valid length", async () => {
    const body = { length: 12 }
    const result = await api.post("/generate-password").send(body)
    
    expect(result.status).toEqual(201)
    expect(result.body.password.length).toEqual(body.length)
  })

  it("Should not generate a new password when not provided with it's length", async () => {
    const body = {}
    const result = await api.post("/generate-password").send(body)

    expect(result.status).toEqual(422)
  })

  it("Should not generate a new password when provided length is negative", async () => {
    const body = { length: -1 }
    const result = await api.post("/generate-password").send(body)

    expect(result.status).toEqual(500)
  })

  it("Should not generate a new password if provided length is zero", async () => {
    const body = { length: 0 }
    const result = await api.post("/generate-password").send(body)

    expect(result.status).toEqual(500)
  })

  it("Should not generate a new password if provided length is greater than 25", async () => {
    const body = { length: 26 }
    const result = await api.post("/generate-password").send(body)

    expect(result.status).toEqual(500)
  })
  
})
