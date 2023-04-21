import { prisma } from "../src/config"

export async function wipeDb() {
  await prisma.password.deleteMany({})
}
