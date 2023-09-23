import { ApplicationError } from '@/protocols';

export function badRequestError(information: string): ApplicationError {
    return {
        name: 'BadRequestError',
        message: information,
    };
}