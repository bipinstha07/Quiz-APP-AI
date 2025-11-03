import { Header } from "./component/header/Header";
import { Footer } from "./component/footer/Footer";

function About() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              About QuizMaster AI
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
              Revolutionizing education through intelligent quiz generation powered by artificial intelligence.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 tracking-tight">
                  Our Mission
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  We believe that learning should be engaging, personalized, and accessible to everyone. 
                  QuizMaster AI transforms the way educators create assessments and students engage with content.
                </p>
                <p className="text-gray-600 font-light leading-relaxed">
                  By harnessing the power of artificial intelligence, we generate high-quality quizzes 
                  that adapt to different learning styles and educational needs.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-900 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-light">Q</span>
                  </div>
                  <h3 className="text-lg font-light text-gray-900 mb-2">AI-Powered Learning</h3>
                  <p className="text-sm text-gray-600 font-light">
                    Intelligent algorithms that understand context and create meaningful assessments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
              What Makes Us Different
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Lightning Fast</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Generate comprehensive quizzes in seconds, not hours. Save time and focus on teaching.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Smart & Adaptive</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  AI that learns from your content and creates questions tailored to your specific needs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-3">Secure & Reliable</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  Enterprise-grade security with 99.9% uptime. Your data is safe and always accessible.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 text-center tracking-tight">
              Built by Educators, for Educators
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Our team combines decades of educational experience with cutting-edge AI technology. 
                We understand the challenges educators face because we've been there ourselves.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                From classroom teachers to university professors, our diverse team brings real-world 
                insights to every feature we build.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="border-t border-gray-200 pt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">10K+</div>
                <div className="text-xs text-gray-600 font-light uppercase tracking-wide">Quizzes Generated</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">500+</div>
                <div className="text-xs text-gray-600 font-light uppercase tracking-wide">Educators</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">50+</div>
                <div className="text-xs text-gray-600 font-light uppercase tracking-wide">Subjects</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-light text-gray-900 mb-2">99.9%</div>
                <div className="text-xs text-gray-600 font-light uppercase tracking-wide">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
