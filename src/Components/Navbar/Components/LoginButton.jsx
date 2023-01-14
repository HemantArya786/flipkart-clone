import { AiOutlineShoppingCart } from "react-icons/ai";

function LoginButton() {
  return (
    <main className="d-flex gap-5 align-items-center">
      <div className="">
        <button className="btn btn-light px-5">Login</button>
      </div>
      <div className="d-flex gap-5 text-white">
        <p>Became a Seller</p>
        <p>More</p>
        <p>
          Cart <AiOutlineShoppingCart />
        </p>
      </div>
    </main>
  );
}

export default LoginButton;
