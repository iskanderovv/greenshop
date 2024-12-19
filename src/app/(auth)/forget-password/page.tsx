"use client";

import { EmailSendOTP } from "@/components/forms/auth-otp-sent";
import { ResetPassword } from "@/components/forms/auth-reset-password";
import { useState } from "react";

export default function page() {
  const [step, setStep] = useState<'email' | 'reset'>('email');
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setStep('reset');
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-lg drop-shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
      {step === 'email' ? (
        <EmailSendOTP onSubmit={handleEmailSubmit} />
      ) : (
        <ResetPassword email={email} />
      )}
    </div>
  );
}

