import { ticketsRepository } from "@/repositories";


function getTicketsType() {
    return ticketsRepository.findTicketsTypes()
}

export const ticketsServices = { getTicketsType }