import { notFoundError } from "@/errors";
import { badRequestError } from "@/errors/bad-request-error";
import { ticketsRepository } from "@/repositories";
import { Ticket, TicketType } from "@prisma/client";


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

type TicketInfo = Ticket & { TicketType: TicketType; }

async function createTicket(ticketTypeId: number, userId: number) {
    if (!ticketTypeId) {
        throw badRequestError('No ticket type')
    }
    const enrollment = await ticketsRepository.findEnrollmentByUserId(userId)
    if (!enrollment) {
        throw notFoundError()
    }
    const enrollmentId = enrollment.id
    const ticketType = await ticketsRepository.findTicketTypeById(ticketTypeId)
    const ticketInfo = await ticketsRepository.createTicket(ticketTypeId, enrollmentId)
    const ticket: TicketInfo = { ...ticketInfo, TicketType: ticketType }
    return ticket
}

export const ticketsServices = { getTicketsType, getTicketByUserId, createTicket }