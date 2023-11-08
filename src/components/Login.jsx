import "./login.css";
export default function Login() {
  return (
    <div className="container">
      <div>
        <img src="../../public/LOGO _DIGITAL_ COLLEGE.PNG" alt="" />
      </div>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div>
        <input type="text" placeholder="Password" />
      </div>
      <button>Sing In</button>
      <p>
        Don't have account? <a href="">Sign Up</a> now
      </p>
    </div>
  );
}
