const express = require('express');
const path = require('path');
const history = require('connect-history-api-fallback');

const app = express();
const port = process.env.PORT || 8080;

// Middleware to handle SPA routing
app.use(history());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Custom middleware to handle authentication
app.use((req, res, next) => {
  // Extract credentials from URL if present
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // Store credentials in session/cookie to persist authentication
    res.cookie('auth', authHeader, {
      maxAge: 365 * 24 * 60 * 60 * 1000, // 1 year
      httpOnly: true,
      secure: true
    });
  }
  next();
});

// Catch-all route to serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});

// Handle process termination gracefully
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Closing server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Closing server...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
