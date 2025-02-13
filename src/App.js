import { useRef, useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const formDataRef = useRef(new FormData());

  const uploadFile = (e) => {
    const file = e.target.files[0];
    formDataRef.current.append("file", file);

    setImages((prevImage) => [...prevImage, URL.createObjectURL(file)]);

    for (let [key, value] of formDataRef.current.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <form>
      <input type="file" onChange={uploadFile} />
      <input type="file" onChange={uploadFile} />
      <input type="file" onChange={uploadFile} />

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
