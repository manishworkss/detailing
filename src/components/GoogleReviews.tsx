import React from 'react';
import { Star, CheckCircle, ShieldCheck, MessageSquare } from 'lucide-react';

interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  location: string;
  comment: string;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Dixit Patel',
    rating: 5,
    date: 'Verified Customer',
    location: 'Vadodara',
    comment: 'They have an appointment based services which is a good point. You reach at the time and your car starts getting served. They have a customer waiting lounge where you can sit and relax while the car is being washed. Once cleaning is done. One person thoroughly checks for cleaning quality which is definitely a good point. Overall I loved their service.'
  },
  {
    id: 'rev-2',
    author: 'Dr Dhruve Bardolia',
    rating: 5,
    date: 'Verified Customer',
    location: 'Karelibagh Studio',
    comment: 'Absolutely impressed with Akshar Car Spa, Karelibaug, Vadodara! Their attention to detail is outstanding—my car looked brand new after the service. The staff is professional, polite, and clearly passionate about their work. Great value for money and timely delivery.'
  },
  {
    id: 'rev-3',
    author: 'Hardik H Chaudharyi',
    rating: 5,
    date: 'Verified Customer',
    location: 'Vadodara',
    comment: "One of the best car spa in Vadodara. They have an appointment system which saves a lot of time as we don't need to wait in queue. Also there are no chances that someone can get his work done without an appointment. The techs are well trained and have knowledge of what they are doing. Even after the wash the owners make sure that no part of the vehicle is left untreated."
  }
];

export const GoogleReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-[#07080A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151822] border border-[#E31E25]/40 text-[#FF3B44] text-[11px] font-semibold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Customer Testimonials</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            What Customers Are Saying
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9E9EA7]">
            Real feedback from car enthusiasts and luxury automobile owners serviced at our Vadodara detailing studios.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="luxury-card p-6 rounded-none flex flex-col justify-between border border-white/10 hover:border-[#E31E25]/50 transition-all duration-300"
            >
              <div>
                {/* Rating Stars & Badge */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E31E25] text-[#E31E25]" />
                    ))}
                    <span className="text-xs font-mono font-bold text-white ml-1.5">5.0</span>
                  </div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#A1A1AA] flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    Google Review
                  </span>
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-[#C4C4CD] leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-white">
                    {review.author}
                  </h4>
                  <span className="text-[10px] text-[#8E8E98] block">
                    {review.location} &bull; {review.date}
                  </span>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#161924] border border-[#E31E25]/30 flex items-center justify-center text-xs font-bold text-[#E31E25]">
                  {review.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
