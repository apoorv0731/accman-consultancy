import { useState } from 'react';
import { BookOpen, Calculator, Users, Shield, Award, TrendingUp, Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setFormStatus('submitting');
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Calculator className="w-8 h-8 text-[#0F172A]" />
              <span className="text-lg font-semibold text-[#0F172A]">AccMan</span>
            </div>
            <nav className="hidden md:flex space-x-12">
              <a href="#services" className="text-gray-600 hover:text-[#0F172A] transition-colors font-medium text-sm">Services</a>
              <a href="#about" className="text-gray-600 hover:text-[#0F172A] transition-colors font-medium text-sm">About</a>
              <a href="#contact" className="text-gray-600 hover:text-[#0F172A] transition-colors font-medium text-sm">Contact</a>
            </nav>
            <a href="#contact" className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm">
              Free Consultation
            </a>
          </div>
        </div>
      </header>

      <section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-[#0F172A] mb-8 leading-tight">
              US-Based Outsourced Accounting
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl">
              Professional accounting services designed for growing businesses. We manage your finances so you can focus on what matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3.5 rounded-md hover:bg-blue-700 transition-colors font-semibold">
                Book a Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#services" className="inline-flex items-center justify-center border-2 border-gray-300 text-[#0F172A] px-8 py-3.5 rounded-md hover:border-[#0F172A] transition-colors font-semibold">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-8">Software We Work With</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="text-sm font-semibold text-gray-700">QuickBooks Online</div>
            <div className="text-sm font-semibold text-gray-700">Xero</div>
            <div className="text-sm font-semibold text-gray-700">Bill.com</div>
            <div className="text-sm font-semibold text-gray-700">Guidepoint</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">US-Based Team</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">CPA Certified Professionals</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Secure & Compliant</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#0F172A] mb-6">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive accounting solutions designed to support your business at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-[#F8FAFC] rounded-lg flex items-center justify-center mb-8">
                <BookOpen className="w-8 h-8 text-[#0F172A]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">Bookkeeping</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Accurate and timely bookkeeping services to keep your financial records organized and up-to-date.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly reconciliation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Financial reporting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Account management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-[#F8FAFC] rounded-lg flex items-center justify-center mb-8">
                <Calculator className="w-8 h-8 text-[#0F172A]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">Tax Services</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Strategic tax planning and preparation to minimize your tax burden and ensure compliance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tax planning & strategy</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Federal & state filing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">IRS representation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-lg border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-[#F8FAFC] rounded-lg flex items-center justify-center mb-8">
                <Users className="w-8 h-8 text-[#0F172A]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">Payroll</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Streamlined payroll processing that ensures your team is paid accurately and on time.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Automated processing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Tax withholding & filing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Benefits administration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-[#0F172A] mb-6">Why Choose AccMan</h2>
            <p className="text-lg text-gray-600">Trusted by businesses across the United States</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Secure & Compliant</h3>
              <p className="text-gray-600 leading-relaxed">
                Bank-level security and full compliance with US accounting standards
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                CPA-certified accountants with decades of combined experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 bg-[#0F172A] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#0F172A] mb-4">Growth Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic insights to help your business scale efficiently
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-[#0F172A] mb-8">About AccMan Consultancy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're a US-based accounting firm dedicated to providing exceptional financial services to businesses of all sizes. Our team of certified professionals brings expertise, reliability, and a personal touch to every client relationship.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience in bookkeeping, tax preparation, and payroll management, we understand the unique challenges businesses face. Our mission is to simplify your financial operations so you can focus on growing your business.
              </p>
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[#F8FAFC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#0F172A]">10+</span>
                  </div>
                  <span className="text-gray-700 font-medium">Years of Experience</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[#F8FAFC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#0F172A]">500+</span>
                  </div>
                  <span className="text-gray-700 font-medium">Satisfied Clients</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-[#F8FAFC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#0F172A]">100%</span>
                  </div>
                  <span className="text-gray-700 font-medium">US-Based Team</span>
                </div>
              </div>
            </div>
            <div className="bg-[#0F172A] p-12 rounded-lg text-white">
              <h3 className="text-2xl font-semibold mb-8">Our Commitment</h3>
              <ul className="space-y-5">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Responsive support when you need it</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Proactive financial guidance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Cutting-edge technology and tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0F172A] mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              Ready to streamline your accounting? Let's talk about how we can help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg text-center border border-gray-200">
              <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-[#0F172A]" />
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-3">Email</h3>
              <p className="text-gray-600">contact@accmanconsultancy.com</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center border border-gray-200">
              <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-[#0F172A]" />
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-3">Phone</h3>
              <p className="text-gray-600">(302) 602-2028</p>
            </div>
            <div className="bg-white p-8 rounded-lg text-center border border-gray-200">
              <div className="w-12 h-12 bg-[#F8FAFC] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-[#0F172A]" />
              </div>
              <h3 className="font-semibold text-[#0F172A] mb-3">Location</h3>
              <p className="text-gray-600 text-sm">444 Washington Blvd<br/>Jersey City, NJ 07310, USA</p>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-lg border border-gray-200">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="access_key" value="INSERT_KEY_LATER" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="(302) 602-2028"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your accounting needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full bg-blue-600 text-white py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <span>{formStatus === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                {formStatus === 'idle' && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-[#0F172A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Calculator className="w-6 h-6" />
                <span className="text-lg font-semibold">AccMan</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional accounting services for growing businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Bookkeeping</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Tax Services</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Payroll</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Contact</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>contact@accmanconsultancy.com</li>
                <li>(302) 602-2028</li>
                <li>Jersey City, NJ 07310</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} AccMan Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
