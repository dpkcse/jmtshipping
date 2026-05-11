export function ContactForm() {
  return (
    <form className="premium-card p-6 sm:p-8" action="mailto:ops@jmtshipping.com" method="post" encType="text/plain">
      <div className="mb-7 border-b border-slate-200 pb-6">
        <p className="section-eyebrow">Inquiry details</p>
        <h2 className="text-2xl font-black tracking-tight text-navy">Tell us how JMT can support your operation.</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label htmlFor="name" className="grid gap-2 text-sm font-black text-navy">
          Name
          <input id="name" className="input-field" name="name" placeholder="Your name" autoComplete="name" required />
        </label>
        <label htmlFor="company" className="grid gap-2 text-sm font-black text-navy">
          Company
          <input id="company" className="input-field" name="company" placeholder="Company / principal" autoComplete="organization" />
        </label>
        <label htmlFor="email" className="grid gap-2 text-sm font-black text-navy">
          Email
          <input id="email" className="input-field" type="email" name="email" placeholder="name@company.com" autoComplete="email" required />
        </label>
        <label htmlFor="requestType" className="grid gap-2 text-sm font-black text-navy">
          Request type
          <select id="requestType" className="input-field" name="requestType" defaultValue="Agency support">
            <option>Agency support</option>
            <option>Logistics / STS</option>
            <option>Crew / documentation</option>
            <option>Survey / inspection</option>
            <option>Marine supplies</option>
            <option>Emergency operations</option>
          </select>
        </label>
      </div>
      <label htmlFor="message" className="mt-5 grid gap-2 text-sm font-black text-navy">
        Message
        <textarea id="message" className="input-field min-h-36" name="message" placeholder="Share vessel name, ETA, port, service required, and any urgent instructions." rows={6} required />
      </label>
      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        Send Inquiry
      </button>
      <p className="mt-4 rounded-2xl bg-harbor/60 px-4 py-3 text-xs font-semibold leading-6 text-slate-600">
        This form opens your email client with the inquiry details. For urgent matters, email ops@jmtshipping.com directly.
      </p>
    </form>
  );
}
