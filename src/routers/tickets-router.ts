import { getTicketsType, getUserTicket, postTicket } from "@/controllers/tickets-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";


const ticketsRouter = Router();

ticketsRouter
    .all('/*', authenticateToken)
    .get('/types', getTicketsType)
    .get('/', getUserTicket)
    .post('/', postTicket)
export { ticketsRouter }