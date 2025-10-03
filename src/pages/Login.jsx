import { useEffect, useState } from "react";
import { Mail, Lock } from "lucide-react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/url";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); // 🔄 loading state

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", form);

    try {
      setLoading(true); // start loader
      const res = await axios.post(`${BASE_URL}api/vendor/login`, form);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
         localStorage.setItem("VendorID", res.data.vendor._id);
         localStorage.setItem("VendorName", res.data.vendor.vendor_name);
      }

      toast.success(res.data.message || "✅ Logged in successfully!");
      navigate("/dashboard"); 
      window.location.reload();
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
      toast.error(err.response?.data?.message || "❌ Login failed. Try again.");
    } finally {
      setLoading(false); // stop loader
    }
  };

  return (
    <div className="min-h-screen bg-black  font-[Poppins] flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center  mb-6 text-[#fed801] drop-shadow-lg font-[Poppins]">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-[#fed801]" size={20} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#fed801] outline-none"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-[#fed801]" size={20} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#fed801] outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg font-semibold transition ${
              loading
                ? "bg-[#fed801] cursor-not-allowed  text-white drop-shadow-lg"
                : "bg-[#fed801]   text-white drop-shadow-lg"
            }`}
          >
            {loading ? (
              <div className="flex justify-center items-center gap-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Logging in...
              </div>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <Link
            to={"/RegisterPage"}
            className=" font-semibold hover:underline text-[#fed801] drop-shadow-lg"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
