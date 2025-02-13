import { useState } from "react";

function App() {
  const [image, setImage] = useState("");

  const uploadFile = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]); // readAsDataURL: 선택한 파일을 url 로 변환해주는 함수

    reader.onloadend = () => {
      // onloadend: 읽기 동작이 발생하면 성공여부와 상관없이 호출되는 이벤트 핸들러함수
      setImage(reader.result);
    };
  };

  return (
    <form>
      <input type="file" onChange={uploadFile} />

      <br />

      <img src={image} alt="img" />
    </form>
  );
}

export default App;

// 파일 하나 업로드 하기
// 파일 여러개 업로드 하기
// 파일 하나씩 여러개 업로드 하기
