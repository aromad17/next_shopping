const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontSize: "24px",
        fontWeight: "bold",
      }}
    >
      <p>Loading...</p>
      {/* 추가적으로 로딩 중에 보여줄 다른 요소들을 넣을 수 있습니다 */}
    </div>
  );
};

export default Loading;
