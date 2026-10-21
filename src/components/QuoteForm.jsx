import { useState } from 'react';
import { CheckCircle2, Copy, MessageCircle } from 'lucide-react';
import { SERVICE_NAMES, whatsappLink, PRIMARY_WHATSAPP } from '@/lib/site';

const PROJECT_TYPES = ['Residential', 'Commercial'];
const CONTACT_METHODS = ['WhatsApp', 'Telephone call'];

const EMPTY = {
  fullName: '',
  phone: '',
  service: '',
  projectType: '',
  location: '',
  description: '',
  contactMethod: '',
};

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="spec-label">{label}</span>
      <div className="mt-3">{children}</div>
      {error ? <span className="mt-2 block text-xs text-red-300">{error}</span> : null}
    </label>
  );
}

const inputClass = (hasError) =>
  `w-full border-b bg-transparent px-0 py-3 font-body text-[0.95rem] text-glacial outline-none transition-colors placeholder:text-aluminium/35 focus:border-glacial ${
    hasError ? 'border-red-400/70' : 'border-white/20'
  }`;

export default function QuoteForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState('');

  const update = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (values.fullName.trim().length < 2) next.fullName = 'Please enter your full name.';
    if (values.phone.replace(/\D/g, '').length < 9) {
      next.phone = 'Please enter a phone number we can reach you on.';
    }
    if (!values.service) next.service = 'Select the service you need.';
    if (!values.projectType) next.projectType = 'Select residential or commercial.';
    if (values.location.trim().length < 2) next.location = 'Please enter the project location.';
    if (values.description.trim().length < 10) next.description = 'Please describe the project briefly.';
    if (!values.contactMethod) next.contactMethod = 'Choose how you would prefer to be contacted.';
    return next;
  };

  const buildMessage = () =>
    [
      '*Quotation Request — GreyPath Glass & Aluminium Works*',
      '',
      `Name: ${values.fullName.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Service required: ${values.service}`,
      `Project type: ${values.projectType}`,
      `Project location: ${values.location.trim()}`,
      `Preferred contact: ${values.contactMethod}`,
      '',
      'Project details:',
      values.description.trim(),
    ].join('\n');

  const handleSubmit = (event) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const message = buildMessage();
    setSent(message);
    window.open(whatsappLink(message, PRIMARY_WHATSAPP), '_blank', 'noopener,noreferrer');
  };

  const copyMessage = () => {
    if (navigator.clipboard) navigator.clipboard.writeText(sent);
  };

  if (sent) {
    return (
      <div className="border border-white/15 bg-graphite2 p-6 lg:p-10">
        <CheckCircle2 className="h-6 w-6 text-steelblue" />
        <h3 className="mt-5 font-heading text-xl font-medium text-glacial">Your enquiry is ready to send</h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-aluminium/75">
          WhatsApp has opened in a new tab with the details below. Send the message to reach GreyPath. Nothing is
          stored on this website.
        </p>
        <pre className="mt-6 max-h-64 overflow-auto whitespace-pre-wrap border border-white/10 bg-graphite p-5 font-mono text-[0.72rem] leading-relaxed text-aluminium/80">
          {sent}
        </pre>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={whatsappLink(sent, PRIMARY_WHATSAPP)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-steel px-6 py-3 text-[0.78rem] uppercase tracking-[0.12em]"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Open WhatsApp again
          </a>
          <button
            type="button"
            onClick={copyMessage}
            className="btn-ghost-line px-6 py-3 text-[0.78rem] uppercase tracking-[0.12em]"
          >
            <Copy className="h-3.5 w-3.5" /> Copy message
          </button>
          <button
            type="button"
            onClick={() => {
              setValues(EMPTY);
              setErrors({});
              setSent('');
            }}
            className="px-2 py-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-aluminium/60 transition-colors hover:text-glacial"
          >
            Start another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-8 sm:grid-cols-2">
      <Field label="Full name" error={errors.fullName}>
        <input
          type="text"
          value={values.fullName}
          onChange={(e) => update('fullName', e.target.value)}
          placeholder="Your name and surname"
          aria-invalid={Boolean(errors.fullName)}
          className={inputClass(errors.fullName)}
        />
      </Field>

      <Field label="Phone number" error={errors.phone}>
        <input
          type="tel"
          value={values.phone}
          onChange={(e) => update('phone', e.target.value)}
          placeholder="e.g. 071 234 5678"
          aria-invalid={Boolean(errors.phone)}
          className={inputClass(errors.phone)}
        />
      </Field>

      <Field label="Service required" error={errors.service}>
        <select
          value={values.service}
          onChange={(e) => update('service', e.target.value)}
          aria-invalid={Boolean(errors.service)}
          className={`${inputClass(errors.service)} appearance-none`}
        >
          <option value="" className="bg-graphite">
            Select a service
          </option>
          {SERVICE_NAMES.map((name) => (
            <option key={name} value={name} className="bg-graphite">
              {name}
            </option>
          ))}
          <option value="Other / not sure" className="bg-graphite">
            Other / not sure yet
          </option>
        </select>
      </Field>

      <Field label="Project type" error={errors.projectType}>
        <select
          value={values.projectType}
          onChange={(e) => update('projectType', e.target.value)}
          aria-invalid={Boolean(errors.projectType)}
          className={`${inputClass(errors.projectType)} appearance-none`}
        >
          <option value="" className="bg-graphite">
            Select residential or commercial
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type} className="bg-graphite">
              {type}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Project location" error={errors.location}>
        <input
          type="text"
          value={values.location}
          onChange={(e) => update('location', e.target.value)}
          placeholder="Suburb, town or site"
          aria-invalid={Boolean(errors.location)}
          className={inputClass(errors.location)}
        />
      </Field>

      <Field label="Preferred contact method" error={errors.contactMethod}>
        <select
          value={values.contactMethod}
          onChange={(e) => update('contactMethod', e.target.value)}
          aria-invalid={Boolean(errors.contactMethod)}
          className={`${inputClass(errors.contactMethod)} appearance-none`}
        >
          <option value="" className="bg-graphite">
            Select a preference
          </option>
          {CONTACT_METHODS.map((method) => (
            <option key={method} value={method} className="bg-graphite">
              {method}
            </option>
          ))}
        </select>
      </Field>

      <div className="sm:col-span-2">
        <Field label="Brief project description" error={errors.description}>
          <textarea
            value={values.description}
            onChange={(e) => update('description', e.target.value)}
            rows={5}
            placeholder="Describe the openings, sizes, rooms or premises involved, and what you would like done."
            aria-invalid={Boolean(errors.description)}
            className={`${inputClass(errors.description)} resize-none`}
          />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="btn-steel w-full px-6 py-4 text-[0.8rem] uppercase tracking-[0.14em]"
        >
          <MessageCircle className="h-4 w-4" /> Send enquiry via WhatsApp
        </button>
        <p className="mt-4 font-mono text-[0.66rem] leading-relaxed tracking-[0.1em] text-aluminium/50">
          This form does not store your details on this website. Submitting it opens WhatsApp with your enquiry
          written out and ready for you to send to GreyPath.
        </p>
      </div>
    </form>
  );
}