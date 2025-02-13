import { useRef, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const formDataRef = useRef(new FormData());

  const uploadFile = (e) => {
    e.preventDefault();

    let files = e.target.files;

    if (!files.length) return;

    const formData = new FormData();
    let images = [];

    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]); // 백엔드 요청용
      images.push(URL.createObjectURL(files[i])); // 미리보기 전용
    }

    formDataRef.current = formData;

    setImages(images);
  };

  return (
    <form>
      <input type="file" multiple onChange={uploadFile} />
      <br />
      <div>
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`Uploaded ${idx}`} width={100} />
        ))}
      </div>
    </form>
  );
}

export default App;

// 파일 하나 업로드 하기 v
// 파일 여러개 업로드 하기
// 파일 하나씩 여러개 업로드 하기
