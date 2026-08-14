"use client";

import React from "react";
import BlurFade from "@/components/magicui/blur-fade";
import {
  SiStripe,
  SiPaypal,
  SiGooglepay,
  SiWhatsapp,
  SiTelegram,
} from "react-icons/si";
import {
  MonetbilIcon,
  CinetPayIcon,
  MavianceIcon,
  PawaPayIcon,
  InTouchIcon,
  PayMooneyIcon,
  MyPaygaIcon,
  SerdipayIcon,
  PaynoteIcon,
  ChatbotIcon,
} from "@/components/ui/svgs/payments";

const BLUR_FADE_DELAY = 0.04;

type Provider = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

const categories: { label: string; providers: Provider[] }[] = [
  {
    label: "African Payment Aggregators",
    providers: [
      { name: "Monetbil", icon: MonetbilIcon },
      { name: "CinetPay", icon: CinetPayIcon },
      { name: "Maviance", icon: MavianceIcon },
      { name: "PawaPay", icon: PawaPayIcon },
      { name: "Intouch", icon: InTouchIcon },
      { name: "PayMooney", icon: PayMooneyIcon },
      { name: "MyPayga", icon: MyPaygaIcon },
      { name: "Serdipay", icon: SerdipayIcon },
      { name: "Paynote", icon: PaynoteIcon },
    ],
  },
  {
    label: "Global Payment Processors",
    providers: [
      { name: "Stripe", icon: SiStripe },
      { name: "PayPal", icon: SiPaypal },
      { name: "Google Pay", icon: SiGooglepay },
    ],
  },
  {
    label: "Chatbot Integrations",
    providers: [
      { name: "WhatsApp", icon: SiWhatsapp },
      { name: "Telegram", icon: SiTelegram },
      { name: "Custom AI Chatbot", icon: ChatbotIcon },
    ],
  },
];

function ProviderPill({ provider, delay }: { provider: Provider; delay: number }) {
  const Icon = provider.icon;
  return (
    <BlurFade delay={delay}>
      <div className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center gap-2 transition-transform duration-150 hover:scale-[1.02]">
        <Icon className="size-4 rounded object-contain flex-shrink-0" />
        <span className="text-foreground text-sm font-medium">
          {provider.name}
        </span>
      </div>
    </BlurFade>
  );
}

export default function PaymentsSection() {
  return (
    <div className="flex min-h-0 flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY * 12}>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Payment Integration Expertise</h2>
          <p className="text-sm text-muted-foreground max-w-xl">
            With 4+ years of fintech experience, I specialize in integrating
            payment gateways across Africa and globally, from mobile money
            aggregators to international card processors. I have implemented
            secure, scalable payment flows for 10+ platforms.
          </p>
        </div>
      </BlurFade>

      <div className="flex flex-col gap-6">
        {categories.map((category, catIndex) => (
          <BlurFade
            key={category.label}
            delay={BLUR_FADE_DELAY * 12.5 + catIndex * 0.1}
          >
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {category.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {category.providers.map((provider, i) => (
                  <ProviderPill
                    key={provider.name}
                    provider={provider}
                    delay={
                      BLUR_FADE_DELAY * 13 + catIndex * 0.15 + i * 0.04
                    }
                  />
                ))}
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
