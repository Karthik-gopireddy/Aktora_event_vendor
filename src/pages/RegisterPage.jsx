import { useState } from "react";
import { Mail, Lock, User, Linkedin, Github, Phone } from "lucide-react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BASE_URL } from "../utils/url";

export default function RegisterPage() {
  const [form, setForm] = useState({
    vendor_name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // 🔄 Loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading

    try {
      const res = await axios.post(`${BASE_URL}api/vendor/register`, form);

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("VendorID", res.data.vendor._id);
        localStorage.setItem("VendorName", res.data.vendor.vendor_name);
      }

      toast.success(res.data.message || "✅ Registered successfully!");
      navigate("/dashboard"); // redirect after success
      window.location.reload(); // 🔄 force refresh after redirect
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
      toast.error(
        err.response?.data?.message || "❌ Registration failed. Try again."
      );
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-[#fed801] mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-3 text-[#fed801]" size={20} />
            <input
              type="text"
              name="vendor_name"
              placeholder="Full Name"
              value={form.vendor_name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#fed801] outline-none"
            />
          </div>

          <div className="relative">
            <Phone className="absolute left-3 top-3 text-[#fed801]" size={20} />
            <input
              type="number"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#fed801] outline-none"
            />
          </div>

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
            className="w-full bg-[#fed801] hover:bg-[#fed801] text-white py-2 rounded-lg font-semibold transition flex items-center justify-center"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-[#fed801] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
