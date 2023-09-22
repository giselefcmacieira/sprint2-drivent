import { notFoundError } from "@/errors";
import { ticketsRepository } from "@/repositories";


function getTicketsType() {
    return ticketsRepository.findTicketsTypes()
}

async function getTicketByUserId(userId: number) {
    const enrollment = await ticketsRepository.findEnrollmentByUserId(userId)
    if (!enrollment) {
        throw notFoundError()
    }
    const enrollmentId = enrollment.id
    const userTicket = await ticketsRepository.findUserTicket(enrollmentId)
    if (!userTicket) {
        throw notFoundError()
    }
    return userTicket
}

export const ticketsServices = { getTicketsType, getTicketByUserId }