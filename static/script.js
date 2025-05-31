// 예시 데이터: 실제 사용 시 서버나 DB에서 가져오는 방식으로 교체 가능
const studentAccounts = [
  { id: "202401", name: "김철수", email: "202401@school.edu", password: "abcd1234" },
  { id: "202402", name: "이영희", email: "202402@school.edu", password: "efgh5678" },
  { id: "202403", name: "박민수", email: "202403@school.edu", password: "ijkl9012" }
];

document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault(); // 폼 기본 동작 막기

  const studentId = document.getElementById("studentId").value.trim();
  const studentName = document.getElementById("studentName").value.trim();
  const resultBox = document.getElementById("result");

  // 일치하는 학생 찾기
  const student = studentAccounts.find(
    (s) => s.id === studentId && s.name === studentName
  );

  if (student) {
    resultBox.innerHTML = `
      <p><strong>이메일:</strong> ${student.email}</p>
      <p><strong>초기 비밀번호:</strong> ${student.password}</p>
    `;
  } else {
    resultBox.innerHTML = "<p>일치하는 학생 정보를 찾을 수 없습니다.</p>";
  }

  resultBox.style.display = "block"; // 결과 표시
});
