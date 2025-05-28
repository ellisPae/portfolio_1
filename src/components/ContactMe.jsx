import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm();

  const formatPhoneNumber = (value) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const inquiryOptions = [
    "Freelance Opportunity",
    "Job/Position Inquiry",
    "Project Collaboration",
    "Open Source Contribution",
    "General Question",
    "Technical Support",
    "Networking or Mentorship",
    "Other",
  ];

  const [isSending, setIsSending] = React.useState(false);

  const onSubmit = (data) => {
    setIsSending(true);
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)
      .then(
        (response) => {
          console.log("Email sent:", response.status, response.text);
          alert("Message sent successfully!");
          reset();
        },
        (error) => {
          console.error("Email send error:", error);
          alert("Something went wrong. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div>
      <section
        id="contactme-section"
        className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen px-6 py-16 flex justify-center items-center"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-10 rounded-xl shadow-lg w-full max-w-xl space-y-6 border border-gray-200 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Contact Me
          </h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Full Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/, message: "Enter a valid email" },
              })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="john.doe@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                onChange: (e) => {
                  e.target.value = formatPhoneNumber(e.target.value);
                },
                pattern: {
                  value: /^\(\d{3}\) \d{3}-\d{4}$/,
                  message: "Enter a valid phone number",
                },
              })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="(123) 456-7890"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type of Inquiry
            </label>
            <select
              defaultValue=""
              {...register("inquiryType", {
                required: "Please select an inquiry type",
              })}
              className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm ${
                // Apply gray text if the value is still the placeholder
                watch("inquiryType") === "" ? "text-gray-400" : "text-black"
              }`}
            >
              <option value="" disabled>
                Please select the type of inquiry
              </option>
              {inquiryOptions.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              rows="4"
              placeholder="Your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {isSubmitSuccessful && (
            <p className="text-green-600 text-center">
              Thanks! Your message was sent.
            </p>
          )}
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
