import AppError from './AppError';

export default class ForbiddenError extends AppError {
  constructor(message) {
    super(403, 'FORBIDDEN', message || 'Vous n\'êtes pas autorisé à effectuer cette opération');
  }
}
