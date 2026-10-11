"use client";

import { useState } from "react";
import { Container } from "@/components/site/container";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site";

const fieldClass =
  "w-full rounded-xl border-[1.5px] border-field bg-white px-4 py-3.5 text-ink focus:border-ink focus:outline-2 focus:outline-offset-1 focus:outline-ink disabled:cursor-not-allowed disabled:opacity-50";
const labelClass = "text-[15px] font-semibold";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.error || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-[clamp(36px,5vw,72px)] pb-[clamp(56px,7vw,96px)]">
      <Container className="flex flex-col gap-[clamp(32px,4vw,56px)]">
        <div className="flex max-w-[760px] flex-col gap-3.5">
          <h1 className="font-display text-[clamp(56px,6.6vw,96px)] leading-[0.92] font-black uppercase">
            Get in touch
          </h1>
          <p className="font-display text-[clamp(24px,2.2vw,30px)] leading-[1.15] text-balance">
            Have a question about Bananarchy or want to connect with our team?
            We&apos;d love to hear from you.
          </p>
        </div>

        <div className="flex flex-wrap items-start gap-[clamp(28px,4vw,64px)]">
          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex min-w-0 flex-[3_1_440px] flex-col gap-5"
          >
            <h2 className="font-display text-[32px] leading-[1.05]">
              Send us a message
            </h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(240px,100%),1fr))] gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  className={fieldClass}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className={labelClass}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
                rows={6}
                className={`${fieldClass} resize-y`}
              />
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer rounded-[14px] bg-ink px-8 py-[17px] text-lg font-semibold text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
              <span className="text-[15px] text-muted">
                We typically respond within 24 to 48 hours.
              </span>
            </div>

            {/* Success message */}
            {submitStatus === "success" && (
              <p
                role="status"
                className="rounded-xl border-2 border-card-anytime bg-white px-5 py-4 font-semibold"
              >
                Message sent. We&apos;ll get back to you within 24 to 48 hours.
              </p>
            )}

            {/* Error message */}
            {submitStatus === "error" && (
              <p
                role="alert"
                className="rounded-xl border-2 border-card-action bg-white px-5 py-4 font-semibold"
              >
                {errorMessage}
              </p>
            )}
          </form>

          {/* Contact information */}
          <aside className="flex min-w-0 flex-[2_1_300px] flex-col gap-4">
            <div className="flex flex-col gap-1.5 rounded-3xl bg-banana p-7">
              <h2 className="text-[15px] font-semibold">Email</h2>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-display text-[clamp(22px,2vw,27px)] leading-[1.15] underline underline-offset-[5px] [overflow-wrap:anywhere]"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="flex flex-col gap-[18px] rounded-3xl bg-paper p-7">
              <div className="flex flex-col gap-1">
                <h2 className="font-semibold">Playtesting</h2>
                <p className="text-body">
                  Interested in playtesting our games? We&apos;d love your
                  feedback.
                </p>
              </div>
              <div className="flex flex-col gap-1 border-t border-line-strong pt-[18px]">
                <h2 className="font-semibold">Partnerships</h2>
                <p className="text-body">
                  Looking to collaborate or distribute our games? Let&apos;s
                  talk.
                </p>
              </div>
              <div className="flex flex-col gap-1 border-t border-line-strong pt-[18px]">
                <h2 className="font-semibold">Social</h2>
                <p className="text-body">
                  Follow us for updates and behind-the-scenes content.
                </p>
                <div className="flex flex-wrap gap-x-[22px] gap-y-1 font-semibold">
                  {SOCIAL_LINKS.filter(
                    (link) => link.name !== "Kickstarter"
                  ).map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 underline underline-offset-4"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
