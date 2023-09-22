import { AuthenticatedRequest } from "@/middlewares";
import { ticketsServices } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getTicketsType(req: AuthenticatedRequest, res: Response) {
    const ticketsTypes = await ticketsServices.getTicketsType()
    return res.status(httpStatus.OK).send(ticketsTypes)
}

export async function getUserTicket(req: AuthenticatedRequest, res: Response) {
    const userTicket = await ticketsServices.getTicketByUserId(req.userId)
    return res.status(httpStatus.OK).send(userTicket)
}