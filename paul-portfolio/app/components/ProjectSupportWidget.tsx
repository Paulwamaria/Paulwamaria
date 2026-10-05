"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

const API_BASE = "https://projectsupport-api.vercel.app";
const SUGGESTED_AMOUNTS = [50, 100, 250, 500];

function normalizeKenyanPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("254")) return digits;
  if (digits.startsWith("0")) return `254${digits.slice(1)}`;
  if (digits.startsWith("7") || digits.startsWith("1")) return `254${digits}`;
  return digits;
}

export default function ProjectSupportWidget() {
  const [amount, setAmount] = useState(100);
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submitSupport(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const projectKey = process.env.NEXT_PUBLIC_PROJECTSUPPORT_KEY;
    if (!projectKey?.startsWith("ps_pub_")) {
      setError("ProjectSupport is not configured yet. Please try again shortly.");
      return;
    }

    const phone = normalizeKenyanPhone(donorPhone);
    if (!/^254(?:7|1)\d{8}$/.test(phone)) {
      setError("Enter a valid Kenyan mobile number, for example 0712345678.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/api/v1/donations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-project-key": projectKey,
        },
        body: JSON.stringify({
          amount,
          currency: "KES",
          donorName: donorName.trim() || "Emryon supporter",
          donorPhone: phone,
          message: "Voluntary project support via emryon.co.ke",
        }),
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(data?.message || "Unable to start the support payment.");
      }

      if (!data?.checkoutUrl) {
        throw new Error("The payment provider did not return a checkout link.");
      }

      window.location.assign(data.checkoutUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="mt-7 rounded-[1.75rem] border border-white/10 bg-black/25 p-5 md:p-6">
      <div className="flex items-start gap-3">
        <div className="mt-0.5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-2 text-emerald-300">
          <CheckCircle2 className="h-4 w-4" />
        </div>
        <div>
          <p className="font-medium text-white">Support a project</p>
          <p className="mt-1 text-xs leading-5 text-neutral-400">
            Voluntary project support in KES. Choose an amount and continue to secure payment.
          </p>
        </div>
      </div>

      <form onSubmit={submitSupport} className="mt-5 space-y-4">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">Suggested amount</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {SUGGESTED_AMOUNTS.map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setAmount(value)}
                className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition ${
                  amount === value
                    ? "border-fuchsia-400/60 bg-fuchsia-500/20 text-white"
                    : "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10"
                }`}
              >
                KSh {value}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-xs text-neutral-400">
            Name <span className="text-neutral-600">(optional)</span>
            <input
              value={donorName}
              onChange={(event) => setDonorName(event.target.value)}
              autoComplete="name"
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-neutral-950/80 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-fuchsia-400/50"
              placeholder="Your name"
            />
          </label>
          <label className="text-xs text-neutral-400">
            M-Pesa phone
            <input
              value={donorPhone}
              onChange={(event) => setDonorPhone(event.target.value)}
              autoComplete="tel"
              inputMode="tel"
              required
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-neutral-950/80 px-3 py-2.5 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-fuchsia-400/50"
              placeholder="07XXXXXXXX"
            />
          </label>
        </div>

        {error && (
          <p role="alert" className="rounded-xl border border-red-400/20 bg-red-400/10 px-3 py-2 text-xs leading-5 text-red-200">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-xl bg-fuchsia-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Starting secure payment…</>
          ) : (
            <>Continue with KSh {amount}<ArrowRight className="ml-2 h-4 w-4" /></>
          )}
        </button>

        <p className="text-[11px] leading-5 text-neutral-500">
          This is voluntary project support, not a charitable donation, investment, or purchase. Payment is processed through ProjectSupport and its payment provider.
        </p>
      </form>
    </div>
  );
}
