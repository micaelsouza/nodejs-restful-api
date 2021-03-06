import jwt from '../services/jwt';

function jwtAuth(req, res, next) {
  let token = req.headers.authorization;

  if (!token || !token.startsWith('Bearer')) {
    return res.status(400).json({
      error: {
        code: 400,
        type: 'Bad Request',
        message: 'Missing required token',
      },
    });
  }

  token = token.split('Bearer').pop().trim();

  jwt.verify(token, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        error: {
          code: 401,
          type: 'Unauthorized',
          message: 'Invalid token',
        },
      });
    }

    req.decoded = decoded;

    next();
    return false;
  });

  return false;
}

export default jwtAuth;
