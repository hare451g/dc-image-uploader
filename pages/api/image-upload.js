function handler(req, res) {
  // default response
  res.statusCode = 403;
  res.json({ message: 'Direct access is not allowed' });
}

export default handler;
