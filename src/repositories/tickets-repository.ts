import { prisma } from "@/config";
import { Prisma } from "@prisma/client";

async function findTicketsTypes() {
    const ticketsTypes = await prisma.ticketType.findMany()
    return ticketsTypes
}

export const ticketsRepository = { findTicketsTypes }