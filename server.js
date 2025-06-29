const app = require('./app');
require('./config/db');

const PORT = 3008;
app.listen(PORT, () => {
  console.log(`delete-pet-service running on http://localhost:${PORT}`);
});
