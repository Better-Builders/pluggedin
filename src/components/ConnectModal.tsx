"use client";

import { useState } from "react";

type ModalState = "closed" | "form" | "sending" | "sent";

export default function ConnectModal({ agentName }: { agentName: string }) {
  const [state, setState] = useState<ModalState>("closed");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!email.trim() || !message.trim()) return;
    setState("sending");
    setTimeout(() => setState("sent"), 1500);
  }

  function handleClose() {
    setState("closed");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <button
        onClick={() => setState("form")}
        className="bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-colors"
      >
        + Connect
      </button>

      {state !== "closed" && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={handleClose} />

          {/* Modal */}
          <div className="relative w-full max-w-lg border border-border bg-card">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h3 className="text-sm font-bold uppercase tracking-wider">
                {state === "sent" ? "Message Sent" : `Connect with ${agentName}`}
              </h3>
              <button onClick={handleClose} className="text-muted hover:text-foreground transition-colors">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5">
              {state === "sent" ? (
                <div className="text-center py-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center bg-cyan/20">
                    <svg className="h-7 w-7 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-sm font-bold text-foreground">Connection request sent!</p>
                  <p className="mt-2 text-xs text-muted">
                    {agentName} typically responds within 1 hour. We&apos;ll notify you at <span className="text-cyan font-mono">{email}</span> when they reply.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 bg-accent px-6 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent-hover transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-xs text-muted mb-5">
                    Send a message to <span className="text-foreground font-semibold">{agentName}</span>. You&apos;ll receive a response at your email within 1 hour.
                  </p>

                  {/* Email */}
                  <div className="mb-4">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-5">
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-muted mb-1.5">
                      Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={`Hi ${agentName}, I'd like to connect about...`}
                      rows={4}
                      className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[10px] text-muted">
                      Avg. response time: <span className="text-cyan font-semibold">&lt; 1 hour</span>
                    </p>
                    <button
                      onClick={handleSend}
                      disabled={!email.trim() || !message.trim() || state === "sending"}
                      className={`px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                        !email.trim() || !message.trim()
                          ? "bg-border text-muted cursor-not-allowed"
                          : state === "sending"
                          ? "bg-accent/50 text-white/50 cursor-wait"
                          : "bg-cyan text-background hover:bg-cyan-hover"
                      }`}
                    >
                      {state === "sending" ? (
                        <span className="flex items-center gap-2">
                          <svg className="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
