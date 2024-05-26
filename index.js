const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8080;

// CORS 설정
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Hello, pitapat!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

