import { prisma } from "@/config";
import { Ticket, TicketType, Enrollment } from "@prisma/client";
import { Prisma } from "@prisma/client";

async function findTicketsTypes() {
    const ticketsTypes = await prisma.ticketType.findMany()
    return ticketsTypes
}

async function findEnrollmentByUserId(userId: number) {
    const enrollment = await prisma.enrollment.findFirst({
        where: { userId }
    })
    return enrollment
}

function findUserTicket(enrollmentId: number) {
    return prisma.ticket.findFirst({
        where: { enrollmentId },
        include: {
            TicketType: true
        }
    })
}

async function findTicketTypeById(ticketTypeId: number) {
    const ticketType = await prisma.ticketType.findFirst({
        where: { id: ticketTypeId }
    })
    return ticketType
}

function createTicket(ticketTypeId: number, enrollmentId: number) {
    return prisma.ticket.create({
        data: { ticketTypeId, enrollmentId, status: 'RESERVED' }
    })
}

export const ticketsRepository = { findTicketsTypes, findEnrollmentByUserId, findUserTicket, findTicketTypeById, createTicket }