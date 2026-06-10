import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell me a bit more").max(1000),
});
type FormData = z.infer<typeof schema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 700));
    toast.success("Message sent — I'll reply within 24 hours.", {
      description: `Thanks, ${data.name}.`,
    });
    reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something guests remember"
          subtitle="Share a few details about your venue and what you're trying to solve. I usually reply within a day."
        />

        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <div className="glass rounded-2xl p-5">
              <Mail className="h-5 w-5 text-gold" />
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="mt-1 font-medium">hello@maison.dev</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <MapPin className="h-5 w-5 text-gold" />
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Based in</p>
              <p className="mt-1 font-medium">Remote · Worldwide</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-3 glass rounded-3xl p-6 sm:p-8 shadow-elegant"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Your name" error={errors.name?.message}>
                <input
                  {...register("name")}
                  className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-gold"
                  placeholder="Chef Antoine"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-gold"
                  placeholder="you@restaurant.com"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="Company / Venue (optional)" error={errors.company?.message}>
                <input
                  {...register("company")}
                  className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-gold"
                  placeholder="Maison Lumière"
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field label="How can I help?" error={errors.message?.message}>
                <textarea
                  rows={5}
                  {...register("message")}
                  className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-gold"
                  placeholder="We have 4 branches and want a unified POS + online ordering…"
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold transition hover:translate-y-[-2px] disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
