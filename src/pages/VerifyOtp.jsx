import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!email) {
      alert("No email found. Please register first.");
      navigate("/register");
    }
  }, [email, navigate]);

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:8080/api/auth/verify-otp", {
        email,
        otp,
      });

      if (res.data.success) {
        alert("OTP verified successfully!");
        navigate("/login");
      } else {
        alert(res.data.message || "Invalid or expired OTP.");
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="hidden md:block">
          <img
            src="https://images.pexels.com/photos/5212342/pexels-photo-5212342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Verify OTP"
            className="w-full h-100 object-cover"
          />
        </div>

        <div className="p-6 md:p-8 bg-gradient-to-tr from-white to-blue-50">
          <h2 className="text-2xl font-bold text-indigo-700 text-center mb-4">
            Verify OTP
          </h2>

          <form className="space-y-4" onSubmit={handleVerify}>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md text-sm"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition text-sm"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
