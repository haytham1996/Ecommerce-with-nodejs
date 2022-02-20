import AppError from './AppError'

export default class BadRequestError extends AppError {
  constructor(message) {
    super(400, 'BAD_REQUEST', message || 'Requête érronnée');
  }
}
