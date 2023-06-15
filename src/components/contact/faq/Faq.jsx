import React from 'react'

function Faq() {
  return (
    <div className="max-w-[880px] mx-auto px-5 py-20">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold text-secondary">
          Frequently asked questions
        </h2>
        <p className="mt-3 max-w-[500px] mx-auto">
          Get answers to all questions you have and boost your knowledge so you
          can save, invest and spend smarter.
        </p>
      </div>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion" checked="checked" />
          <div className="collapse-title text-xl font-medium">
            What is a Virtual Restaurant?
          </div>
          <div className="collapse-content">
            <p className='font-[300]'>
              Virtual Restaurants (also known as virtual brands) are digital
              storefronts on delivery platforms that enable brick and mortar
              restaurants to reach more customers and increase food sales.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion" />
          <div className="collapse-title text-xl font-medium">
            Why partner with Future Foods?
          </div>
          <div className="collapse-content">
            <p className='font-[300]'>
              We help our restaurant partners increase sales. At Future Foods,
              our top priority is to help restaurant operators be more
              successful. We know you make great food, and we handle the rest!
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion" />
          <div className="collapse-title text-xl font-medium">
            How much does it cost?
          </div>
          <div className="collapse-content">
            <p className='font-[300]'>
              Our pricing is straightforward and incentive-based. We guarantee
              prices for your food when you sign up. We only make money when you
              make money.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion" />
          <div className="collapse-title text-xl font-medium">
            How do we get paid for the orders we make?
          </div>
          <div className="collapse-content">
            <p className='font-[300]'>
              Future Foods sends out weekly direct deposits for the orders you
              complete for our brands.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion" />
          <div className="collapse-title text-xl font-medium">
            What if my government has a subsidy in place for delivery
            commissions?
          </div>
          <div className="collapse-content">
            <p className='font-[300]'>
              Future Foods is obligated to pass along any government subsidies
              and the savings will be reflected on weekly payouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq