import AppError from './AppError'

export default class AuthorizationError extends AppError {
  constructor(message) {
    super(401, 'UNAUTHORIZED_ERROR', message || 'You are not authorized');
  }
}