import { useNavigate } from "react-router";

function FilmDetailCard(props) {
  const navigate = useNavigate();
  const handlBookOnClick = () => {
    localStorage.removeItem("filmId");
    localStorage.setItem("filmId", props.film.id);
    navigate(`/user/cinema/${props.film.id}`);
  };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2 mr-4">
        <img src={"../" + props?.film?.img} alt="" />
      </div>
      <div className="col-span-5 flex flex-col text-2xl">
        <span>Thời lượng : {props.film?.length} Phút</span>
        <span>Khởi chiếu : {props.film?.created}</span>
        <span>Thể loại : {props.film?.des}</span>
        <span>Xếp hạng : {props.film?.rate} sao</span>
        <span>
          Tóm tắt phim : Cuộc Phiêu Lưu Tuyệt Vời" là một bộ phim hài kịch xoay
          quanh cuộc sống của Bob, một người bình thường bắt đầu một hành trình
          phiêu lưu khám phá thế giới. Bob vô tình trở thành người hùng không
          tưởng khi gặp gỡ những nhân vật kỳ cục và đối mặt với những thách thức
          không ngờ. Bằng sự hài hước và lòng tự tin, anh ta phát hiện ra giá
          trị của cuộc sống và tình bạn trong những tình huống bất ngờ nhất.
          "Cuộc Phiêu Lưu Tuyệt Vời" mang lại những tiếng cười, cảm xúc, và
          thông điệp tích cực về việc khám phá và trân trọng mọi khoảnh khắc.
        </span>
        <button
          onClick={handlBookOnClick}
          className="border border-black w-20 bg-orange-400 rounded-sm"
        >
          Book
        </button>
      </div>
    </div>
  );
}

export default FilmDetailCard;
