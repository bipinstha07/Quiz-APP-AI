import { Header } from "./component/header/Header";
import { Footer } from "./component/footer/Footer";

function Contact() {
  return (
    <>   
      <Header />
      <div>
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
              Contact Us
            </h1>
            <p className="text-gray-500 font-light text-sm md:text-base">
              Get in touch with us for any questions or feedback
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-700 font-light leading-relaxed mb-6">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 text-gray-600">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-light">contact@quizapp.com</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 text-gray-600">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-light">123 Quiz Street, Education City</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 text-gray-600">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <span className="text-gray-700 font-light">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent text-gray-900 placeholder-gray-400 font-light text-lg"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent text-gray-900 placeholder-gray-400 font-light text-lg"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors bg-transparent text-gray-900 placeholder-gray-400 font-light text-lg"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:border-gray-900 outline-none transition-colors resize-none bg-transparent text-gray-900 placeholder-gray-400 font-light text-lg"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white font-light py-4 px-6 hover:bg-gray-800 focus:outline-none transition-colors text-sm uppercase tracking-wider"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
