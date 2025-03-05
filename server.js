const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());  // CORS 허용
app.use(bodyParser.json());  // JSON 데이터 처리

let surveyResponses = [];  // 설문 응답 저장 배열

// 설문 응답 저장 API
app.post("/submit", (req, res) => {
    const { q1, q2 } = req.body;

    if (!q1 || !q2) {
        return res.status(400).json({ error: "모든 질문에 답변해야 합니다." });
    }

    surveyResponses.push({ q1, q2 });
    console.log("새로운 응답:", { q1, q2 });

    res.json({ message: "응답이 저장되었습니다!" });
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
});
