const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes'); //如果需要的文件是index.js是可以不用打的，系统会自己找到

app.use(cors());
app.use(express.json());
app.use('/api', router);

const PORT = 80;
app.listen(PORT, function(){
    console.log(`server is running on port ${PORT}`);
});

