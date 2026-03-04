'use client'

import { Heart, Shield, Clock, Truck, Users, Stethoscope } from 'lucide-react'

const reasons = [
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Our pharmacists take the time to understand your health needs and provide tailored guidance.',
  },
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Rigorous medication safety protocols and drug interaction checks on every prescription.',
  },
  {
    icon: Clock,
    title: 'Quick Service',
    description: 'Most prescriptions ready in 15 minutes or less, with convenient drive-through options.',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Complimentary home delivery for prescriptions within our service area.',
  },
  {
    icon: Users,
    title: 'Community Health',
    description: 'Free health screenings, vaccinations, and wellness programs for the community.',
  },
  {
    icon: Stethoscope,
    title: 'Expert Consultation',
    description: 'Board-certified pharmacists available for medication therapy management.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Why Choose Greenleaf Pharmacy
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted neighborhood pharmacy committed to your health and wellness.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
