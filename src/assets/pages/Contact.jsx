// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     alert("Your message has been sent successfully!");
//     setFormData({ name: "", email: "", subject: "", message: "" });
//     navigate("/"); // Redirect to a "home" page or any other page
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//         backgroundColor: "#300e0e", // lighter black background
//         fontFamily: "Arial, sans-serif",
//         color: "#333", // Darker text color for better readability
//         padding: "0 15px",
//       }}
//     >
//       <h1
//         style={{
//           marginBottom: "30px",
//           color: "#fff8f8", // Dark grey text
//           fontSize: "32px",
//           fontWeight: "bold",
//           textAlign: "center",
//         }}
//       >
//         Contact Me
//       </h1>
//       <form
//         action="https://formspree.io/f/mpwqrrol"
//         method="POST"
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           width: "100%",
//           maxWidth: "500px", // Set max width for better form control
//           padding: "30px",
//           backgroundColor: "#fff",
//           boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//           borderRadius: "10px",
//           border: "1px solid #ddd",
//           transition: "all 0.3s ease",
//         }}
//       >
//         <div style={{ marginBottom: "20px" }}>
//           <label
//             htmlFor="name"
//             style={{
//               display: "block",
//               color: "#555",
//               fontWeight: "600",
//               marginBottom: "8px",
//             }}
//           >
//             Full Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             placeholder="John Doe"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             style={{
//               padding: "12px",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               width: "100%",
//               fontSize: "16px",
//               outline: "none",
//               transition: "border-color 0.3s ease",
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <label
//             htmlFor="email"
//             style={{
//               display: "block",
//               color: "#555",
//               fontWeight: "600",
//               marginBottom: "8px",
//             }}
//           >
//             Email Address
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="example@example.com"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={{
//               padding: "12px",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               width: "100%",
//               fontSize: "16px",
//               outline: "none",
//               transition: "border-color 0.3s ease",
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <label
//             htmlFor="subject"
//             style={{
//               display: "block",
//               color: "#555",
//               fontWeight: "600",
//               marginBottom: "8px",
//             }}
//           >
//             Subject
//           </label>
//           <input
//             type="text"
//             name="subject"
//             id="subject"
//             placeholder="Subject Matter"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//             style={{
//               padding: "12px",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               width: "100%",
//               fontSize: "16px",
//               outline: "none",
//               transition: "border-color 0.3s ease",
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: "20px" }}>
//           <label
//             htmlFor="message"
//             style={{
//               display: "block",
//               color: "#555",
//               fontWeight: "600",
//               marginBottom: "8px",
//             }}
//           >
//             Message
//           </label>
//           <textarea
//             name="message"
//             id="message"
//             rows="5"
//             placeholder="Your message here..."
//             value={formData.message}
//             onChange={handleChange}
//             required
//             style={{
//               padding: "12px",
//               border: "1px solid #ccc",
//               borderRadius: "5px",
//               width: "100%",
//               fontSize: "16px",
//               outline: "none",
//               resize: "none",
//               transition: "border-color 0.3s ease",
//             }}
//           />
//         </div>

//         <button
//           type="submit"
//           style={{
//             backgroundColor: "#007bff",
//             color: "#fff",
//             padding: "12px 20px",
//             borderRadius: "5px",
//             fontSize: "16px",
//             cursor: "pointer",
//             border: "none",
//             transition: "background-color 0.3s ease, transform 0.2s ease",
//           }}
//           onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
//           onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
//         >
//           Send Message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send form data to Formspree (this part is handled by Formspree)
    console.log("Form Data:", formData);

    // Display success toast notification
    toast.success("Your message has been sent successfully!");

    // Clear the form data
    // setFormData({ name: "", email: "", subject: "", message: "" });

    // Redirect to home page after a short delay
    setTimeout(() => {
      navigate("/home"); // Redirect to the homepage or any other page
    }, 2000); // 2 seconds delay before navigation
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#300e0e", // lighter black background
        fontFamily: "Arial, sans-serif",
        color: "#333", // Darker text color for better readability
        padding: "0 15px",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          color: "#fff8f8", // Dark grey text
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Contact Me
      </h1>
      <form
        action="https://formspree.io/f/mpwqrrol"
        method="POST"
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "500px", // Set max width for better form control
          padding: "30px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          borderRadius: "10px",
          border: "1px solid #ddd",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              color: "#555",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "100%",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              color: "#555",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "100%",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="subject"
            style={{
              display: "block",
              color: "#555",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject Matter"
            value={formData.subject}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "100%",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="message"
            style={{
              display: "block",
              color: "#555",
              fontWeight: "600",
              marginBottom: "8px",
            }}
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              width: "100%",
              fontSize: "16px",
              outline: "none",
              resize: "none",
              transition: "border-color 0.3s ease",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
            border: "none",
            transition: "background-color 0.3s ease, transform 0.2s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
          Send Message
        </button>
      </form>

      {/* Toast container for notifications */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
