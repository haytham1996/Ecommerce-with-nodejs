import AppError from './AppError';

export default class NotFoundError extends AppError {
  constructor(message) {
    super(404, 'NOT_FOUND', message || 'Introuvable');
  }
}
