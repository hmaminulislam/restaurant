import '../contact-form/contact-form.css'

function ContactForm() {
  return (
    <div className='mx-5'>
      <div className="max-w-[1080px] mx-auto shadow-md sm:px-10 md:px-14 px-6 sm:py-20 py-12 my-20 rounded-md">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-secondary">
            Get in touch with us.
          </h2>
          <p className="mt-3">
            Fill up the form and our team will get back to you within 24 hours
          </p>
        </div>
        <div>
          <form>
            <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5">
              <div>
                <label
                  className="block text-[18px] font-[500] text-secondary mb-[4px]"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label
                  className="block text-[18px] font-[500] text-secondary mb-[4px]"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-10 gap-5 mt-5">
              <div>
                <label
                  className="block text-[18px] font-[500] text-secondary mb-[4px]"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="Your phone"
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label
                  className="block text-[18px] font-[500] text-secondary mb-[4px]"
                  htmlFor="service"
                >
                  Service
                </label>
                <input
                  type="text"
                  placeholder="Your service"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="mt-5">
              <label
                className="block text-[18px] font-[500] text-secondary mb-[4px]"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="textarea textarea-bordered w-full h-[150px]"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button className="py-[15px] px-[40px] text-[18px] font-[600] mx-auto bg-secondary text-white block mt-8 rounded-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm