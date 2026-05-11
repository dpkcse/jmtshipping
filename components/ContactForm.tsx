export function ContactForm() {
  return (
    <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-premium sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-navy">
          Name
          <input className="input-field" name="name" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy">
          Company
          <input className="input-field" name="company" placeholder="Company / principal" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy">
          Email
          <input className="input-field" type="email" name="email" placeholder="name@company.com" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-navy">
          Request type
          <select className="input-field" name="requestType" defaultValue="Agency support">
            <option>Agency support</option>
            <option>Logistics / STS</option>
            <option>Crew / documentation</option>
            <option>Survey / inspection</option>
            <option>Marine supplies</option>
            <option>Emergency operations</option>
          </select>
        </label>
      </div>
      <label className="mt-5 grid gap-2 text-sm font-bold text-navy">
        Message
        <textarea className="input-field min-h-36" name="message" placeholder="Share vessel name, ETA, port, service required, and any urgent instructions." />
      </label>
      <button type="submit" className="mt-6 w-full rounded-full bg-safety px-7 py-4 font-black text-navy shadow-lg shadow-safety/20 hover:bg-gold sm:w-auto">
        Send Inquiry
      </button>
      <p className="mt-4 text-xs leading-6 text-slate-500">
        This form is a front-end inquiry UI. For urgent matters, email ops@jmtshipping.com directly.
      </p>
    </form>
  );
}
