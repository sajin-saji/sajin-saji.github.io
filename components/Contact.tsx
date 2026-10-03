"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// Precise Brand Icons
const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const GitHubIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const FORMLYNK_API_KEY =
  process.env.NEXT_PUBLIC_FORM_API_KEY ||
  "pk_live_yqULhGfDl0Rhbesz9cVRILQ5EzSwILeVd03NY7rJ";

const FORMLYNK_ENDPOINTS = [
  "https://salmon-cheetah-602860.hostingersite.com/api/v1/forms/submit",
  "https://api.formlynk.io/api/v1/forms/submit",
];

export const Contact: React.FC = () => {
  const { language, t } = useLanguage();
  const contact = portfolioData.contact;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [gotcha, setGotcha] = useState("");

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Client Validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setFeedbackMessage(
        language === "de"
          ? "Bitte füllen Sie alle 3 Pflichtfelder aus (Name, E-Mail, Nachricht)."
          : "Please complete all 3 required fields (Name, Email, Message)."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      setFeedbackMessage(
        language === "de"
          ? "Bitte geben Sie eine gültige E-Mail-Adresse ein."
          : "Please enter a valid email address."
      );
      return;
    }

    // 2. Honeypot check
    if (gotcha) {
      setStatus("success");
      setFeedbackMessage(
        language === "de"
          ? "Vielen Dank! Ihre Nachricht wurde empfangen."
          : "Thank you! Your message has been received."
      );
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    const payload = {
      form_id: "contact",
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      _gotcha: "",
    };

    let submitted = false;
    let lastError = "";

    // Send payload to backend
    for (const endpoint of FORMLYNK_ENDPOINTS) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "X-API-Key": FORMLYNK_API_KEY,
          },
          body: JSON.stringify(payload),
        });

        const result = await response.json().catch(() => null);

        if (response.ok && (result?.success === true || result?.success !== false)) {
          submitted = true;
          break;
        } else {
          lastError = result?.error?.message || result?.message || "Submission error.";
        }
      } catch (err) {
        lastError = err instanceof Error ? err.message : "Network error.";
      }
    }

    if (submitted) {
      setStatus("success");
      setFeedbackMessage(
        language === "de"
          ? "Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt. Sajin Saji wird sich in Kürze bei Ihnen melden."
          : "Thank you! Your message has been successfully delivered. Sajin Saji will respond to you promptly."
      );
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setStatus("error");
      setFeedbackMessage(
        language === "de"
          ? `Übermittlungsfehler (${lastError}). Bitte kontaktieren Sie direkt sajinsaji222@gmail.com.`
          : `Submission issue (${lastError}). Please write directly to sajinsaji222@gmail.com.`
      );
    }
  };

  return (
    <section id="contact" className="py-20 scroll-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Contact Info & Direct Links (Cols 1-5) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <div className="font-mono text-xs font-semibold tracking-widest uppercase text-[#C65D43] mb-2">
              {t(contact.eyebrow)}
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#203C35] tracking-tight mb-4">
              {t(contact.heading)}
            </h2>
            <p className="text-[#343830]/80 text-base leading-relaxed mb-8">
              {t(contact.intro)}
            </p>
          </div>

          {/* Direct Verified Links */}
          <div className="flex flex-col gap-4 pt-6 border-t border-[#E3DED2]">
            <a
              href={`mailto:${contact.info.email}`}
              className="flex items-center justify-between group py-2 border-b border-[#E3DED2] text-[#203C35] hover:text-[#C65D43] transition-colors"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#343830]/60">Email</span>
                <span className="font-medium text-sm sm:text-base">{contact.info.email}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#343830]/40 group-hover:text-[#C65D43] transition-colors" />
            </a>

            <a
              href={contact.info.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group py-2 border-b border-[#E3DED2] text-[#203C35] hover:text-[#C65D43] transition-colors"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#343830]/60">LinkedIn</span>
                <span className="font-medium text-sm sm:text-base">{contact.info.linkedinDisplay}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#343830]/40 group-hover:text-[#C65D43] transition-colors" />
            </a>

            <a
              href={contact.info.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group py-2 border-b border-[#E3DED2] text-[#203C35] hover:text-[#C65D43] transition-colors"
            >
              <div className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#343830]/60">GitHub</span>
                <span className="font-medium text-sm sm:text-base">{contact.info.githubDisplay}</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#343830]/40 group-hover:text-[#C65D43] transition-colors" />
            </a>
          </div>
        </div>

        {/* Form: Strictly 3 Fields (Name, Email, Message) (Cols 6-12) */}
        <div className="lg:col-span-7 pt-4 lg:pt-0">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
            {/* Honeypot field */}
            <input
              type="text"
              name="_gotcha"
              value={gotcha}
              onChange={(e) => setGotcha(e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            {/* Field 1: Name */}
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#203C35]">
                {t(contact.form.nameLabel)} *
              </span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="e.g. Dr. Thomas Meier"
                className="w-full bg-[#ECE7DC]/70 border border-[#D4CEBF] focus:border-[#203C35] px-4 py-3 text-sm text-[#203C35] placeholder:text-[#343830]/40 focus:outline-none transition-colors"
              />
            </label>

            {/* Field 2: Email */}
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#203C35]">
                {t(contact.form.emailLabel)} *
              </span>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="e.g. t.meier@company.de"
                className="w-full bg-[#ECE7DC]/70 border border-[#D4CEBF] focus:border-[#203C35] px-4 py-3 text-sm text-[#203C35] placeholder:text-[#343830]/40 focus:outline-none transition-colors"
              />
            </label>

            {/* Field 3: Message */}
            <label className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[#203C35]">
                {t(contact.form.messageLabel)} *
              </span>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                placeholder="Hello Sajin, we are interested in discussing an engineering position with you..."
                className="w-full bg-[#ECE7DC]/70 border border-[#D4CEBF] focus:border-[#203C35] px-4 py-3 text-sm text-[#203C35] placeholder:text-[#343830]/40 focus:outline-none transition-colors resize-y min-h-[140px]"
              />
            </label>

            {/* Submit Action Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 bg-[#203C35] text-[#F3F0E8] hover:bg-[#C65D43] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide disabled:opacity-60 transition-colors cursor-pointer shadow-md hover:shadow-lg"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#F3F0E8]" />
                    <span>{language === "de" ? "WIRD GESENDET..." : "SENDING..."}</span>
                  </>
                ) : (
                  <>
                    <span>{t(contact.form.submitBtn)}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#F3F0E8]" />
                  </>
                )}
              </button>
            </div>

            {/* Live Feedback Alerts */}
            {status === "success" && (
              <div className="p-4 border border-[#203C35] bg-[#ECE7DC] text-[#203C35] flex items-start gap-3 text-xs sm:text-sm animate-in fade-in duration-200">
                <CheckCircle2 className="w-5 h-5 text-[#203C35] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold uppercase font-mono tracking-wider mb-0.5">
                    {language === "de" ? "NACHRICHT ERFOLGREICH GESENDET" : "MESSAGE DELIVERED SUCCESSFULLY"}
                  </span>
                  <span>{feedbackMessage}</span>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="p-4 border border-[#C65D43] bg-[#ECE7DC] text-[#C65D43] flex items-start gap-3 text-xs sm:text-sm animate-in fade-in duration-200">
                <AlertCircle className="w-5 h-5 text-[#C65D43] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold uppercase font-mono tracking-wider mb-0.5">
                    {language === "de" ? "HINWEIS ZUR ÜBERMITTLUNG" : "SUBMISSION NOTICE"}
                  </span>
                  <span>{feedbackMessage}</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
