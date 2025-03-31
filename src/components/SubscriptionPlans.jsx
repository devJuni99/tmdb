import React from 'react';

// 개별 카드 컴포넌트
function PlanCard({ title, resolution, features, price, color }) {
  return (
    <div className={`w-full max-w-xs rounded-xl p-8 ${color} text-white`}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-2xl font-bold mb-4">{resolution}</p>

      {features.map((feature, index) => (
        <div key={index} className="flex items-center mb-3">
          <svg
            className="w-5 h-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
              fill="currentColor"
            />
          </svg>
          <p className="text-base">{feature}</p>
        </div>
      ))}

      <p className="text-2xl font-bold mt-8">월 {price}원</p>
    </div>
  );
}

export default function SubscriptionPlans() {
  const plans = [
    {
      title: '광고형 스탠다드',
      planType: 'standard-ad',
      resolution: '1080p',
      features: ['좋은 화질', '생각보다 적은 수의 광고'],
      price: '5,500',
      color: 'bg-gradient-to-br from-blue-800 to-blue-950',
    },
    {
      title: '스탠다드',
      planType: 'standard',
      resolution: '1080p',
      features: ['좋은 화질', '광고 없음'],
      price: '13,500',
      color: 'bg-gradient-to-br from-purple-800 to-purple-950',
    },
    {
      title: '프리미엄',
      planType: 'premium',
      resolution: '4K + HDR',
      features: ['가장 좋은 화질', '이머시브 사운드(공간 음향)', '광고 없음'],
      price: '17,000',
      color: 'bg-gradient-to-br from-red-800 to-red-950',
    },
  ];

  return (
    <div className="bg-black bg-opacity-30 text-white p-8">
      <h1 className="text-3xl text-center font-bold mb-8 px-4">
        나의 니즈에 꼭 맞는 멤버십
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan) => (
          <PlanCard
            key={plan.planType}
            title={plan.title}
            planType={plan.planType}
            resolution={plan.resolution}
            features={plan.features}
            price={plan.price}
            color={plan.color}
          />
        ))}
      </div>
    </div>
  );
}
