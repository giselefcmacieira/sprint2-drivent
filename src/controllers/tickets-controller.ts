import { ticketsServices } from "@/services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getTicketsType(req: Request, res: Response) {
    const ticketsTypes = await ticketsServices.getTicketsType()
    return res.status(httpStatus.OK).send(ticketsTypes)
}