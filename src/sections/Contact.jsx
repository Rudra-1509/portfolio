import React, { useRef, useState } from "react";
import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/Models/Contact/ContactExperience";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      );

      setForm({
        name: "",
        email: "",
        message: "",
      });

      toast.success("Message sent successfully!");
    } catch (error) {
      console.log("EmailJS Error:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <Toaster position="bottom-center" />

      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Let's build something meaningful."
          sub="Have an idea, opportunity, or collaboration in mind? Feel free to reach out."
        />

        <div className="grid-12-cols mt-16">

          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">

              <form
                onSubmit={handleSubmit}
                ref={formRef}
                className="w-full flex flex-col gap-7"
              >

                <div>
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>


                <div>
                  <label htmlFor="email">
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>


                <div>
                  <label htmlFor="message">
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or message"
                    rows="5"
                    required
                  />
                </div>


                <button type="submit" disabled={loading}>
                  <div className="cta-button group">
                    <div className="bg-circle" />

                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>

                    <div className="arrow-wrapper">
                      <img
                        src="/images/arrow-down.svg"
                        alt="arrow"
                      />
                    </div>

                  </div>
                </button>

              </form>

            </div>


            {/* Contact Info */}

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-4">
                <span className="text-white-50">
                  📧
                </span>

                <div>
                  <p className="text-sm text-white-50">
                    Email
                  </p>

                  <a
                    href="mailto:rudranilmn1509@gmail.com"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    rudranilmn1509@gmail.com
                  </a>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <span className="text-white-50">
                  📱
                </span>

                <div>
                  <p className="text-sm text-white-50">
                    Phone
                  </p>

                  <a
                    href="tel:+919477926507"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    +91 9477926507
                  </a>
                </div>
              </div>


              <div className="flex items-center gap-4">
                <span className="text-white-50">
                  📍
                </span>

                <div>
                  <p className="text-sm text-white-50">
                    Location
                  </p>

                  <p className="text-white">
                    Kolkata, India
                  </p>
                </div>

              </div>

            </div>

          </div>


          <div className="xl:col-span-7 min-h-96">

            <div className="contact-model-panel w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">

              <ContactExperience />

            </div>

          </div>


        </div>

      </div>

    </section>
  );
};

export default Contact;