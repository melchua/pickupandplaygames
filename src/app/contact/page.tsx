"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <main className="flex-grow">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question about Bananarchy or want to connect with our team?
              We&apos;d love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(244,91,105,1)] hover:shadow-[4px_4px_0px_0px_rgba(244,91,105,1)] transform hover:translate-x-1 hover:translate-y-1 transition-all duration-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border-4 border-ink rounded-lg focus:outline-none focus:ring-0 focus:border-hot-pink bg-white text-ink font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border-4 border-ink rounded-lg focus:outline-none focus:ring-0 focus:border-hot-pink bg-white text-ink font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-bold mb-2"
                    >
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
                      className="w-full px-4 py-3 border-4 border-ink rounded-lg focus:outline-none focus:ring-0 focus:border-hot-pink bg-white text-ink font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-4 py-3 border-4 border-ink rounded-lg focus:outline-none focus:ring-0 focus:border-hot-pink bg-white text-ink font-medium resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-banana hover:bg-hot-pink text-ink hover:text-white border-4 border-ink font-bold text-lg uppercase tracking-wider transform hover:translate-y-1 hover:translate-x-1 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {/* Success Message */}
                  {submitStatus === "success" && (
                    <div className="mt-4 p-4 bg-green-100 border-4 border-green-500 rounded-lg shadow-[4px_4px_0px_0px_rgba(34,197,94,1)]">
                      <p className="text-green-700 font-bold">
                        ✅ Message sent successfully! We&apos;ll get back to you
                        within 24-48 hours.
                      </p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === "error" && (
                    <div className="mt-4 p-4 bg-red-100 border-4 border-red-500 rounded-lg shadow-[4px_4px_0px_0px_rgba(239,68,68,1)]">
                      <p className="text-red-700 font-bold">
                        ❌ {errorMessage}
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(255,232,93,1)] bg-banana">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-ink mb-1">Email</h4>
                      <p className="text-ink">hello@pickupandplaygames.com</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-ink mb-1">Social Media</h4>
                      <p className="text-ink">
                        Follow us for updates and behind-the-scenes content!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(244,91,105,1)] bg-hot-pink">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Game Development
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-white mb-1">Playtesting</h4>
                      <p className="text-white">
                        Interested in playtesting our games? We&apos;d love your
                        feedback!
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">
                        Partnerships
                      </h4>
                      <p className="text-white">
                        Looking to collaborate or distribute our games?
                        Let&apos;s talk!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-4 border-ink shadow-[8px_8px_0px_0px_rgba(255,232,93,1)] bg-banana">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Response Time</h3>
                  <p className="text-ink">
                    We typically respond to all inquiries within 24-48 hours.
                    Thanks for your patience!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
