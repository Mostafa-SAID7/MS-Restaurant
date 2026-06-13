import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { SectionHeading } from "./Reveal";
import { submitContact } from "@/lib/contact.functions";
import {
  contactInfo,
  contactSectionData,
  contactFormSchema,
  contactFormFields,
  contactMessages,
  type ContactFormData,
} from "@/data/contact";

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await submitContact(data);
      toast.success(contactMessages.success, {
        description: contactMessages.successDescription(data.name),
      });
      reset();
    } catch (err) {
      console.error(err);
      toast.error(contactMessages.error, {
        description: contactMessages.errorDescription,
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          eyebrow={contactSectionData.eyebrow}
          title={contactSectionData.title}
          subtitle={contactSectionData.subtitle}
        />

        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            {contactInfo.map((info) => (
              <div key={info.label} className="glass rounded-2xl p-5">
                <info.icon className="h-5 w-5 text-gold" />
                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{info.title}</p>
                <p className="mt-1 font-medium">{info.value}</p>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-3 glass rounded-3xl p-6 sm:p-8 shadow-elegant"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {contactFormFields.slice(0, 2).map((field) => (
                <Field key={field.name} label={field.label} error={errors[field.name]?.message}>
                  <input
                    {...register(field.name)}
                    type={field.type}
                    className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-gold"
                    placeholder={field.placeholder}
                  />
                </Field>
              ))}
            </div>
            <div className="mt-4">
              <Field
                label={contactFormFields[2].label}
                error={errors[contactFormFields[2].name]?.message}
              >
                <input
                  {...register(contactFormFields[2].name)}
                  type={contactFormFields[2].type}
                  className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-gold"
                  placeholder={contactFormFields[2].placeholder}
                />
              </Field>
            </div>
            <div className="mt-4">
              <Field
                label={contactFormFields[3].label}
                error={errors[contactFormFields[3].name]?.message}
              >
                <textarea
                  rows={5}
                  {...register(contactFormFields[3].name)}
                  className="w-full resize-none rounded-xl border border-border bg-background/40 px-4 py-3 text-sm outline-none transition focus:border-gold"
                  placeholder={contactFormFields[3].placeholder}
                />
              </Field>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-gold transition hover:translate-y-[-2px] disabled:opacity-60"
            >
              {isSubmitting ? contactMessages.sending : contactMessages.send}
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
