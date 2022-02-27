import AppError from './AppError';

export default class ForbiddenError extends AppError {
  constructor(message) {
    super(403, 'FORBIDDEN', message || 'You are not authorized to do this action');
  }
}
