function ViewCarouselBar({heading,image}) {
  return (
    <main>
      <div className=" text-center py-4">
        <h3>{heading}</h3>
        <div className="">
          <button className="btn btn-primary rounded-0">
            <h6 className="m-0">View All</h6>
          </button>
        </div>
      </div>

      <div className=" ">
        <img
          src={image}
          alt="err"
          className="w-100"
        />
      </div>
    </main>
  );
}
export default ViewCarouselBar;
