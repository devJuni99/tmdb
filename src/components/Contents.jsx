import React from 'react';
import Card from './Card';

export default function Contents() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-8 bg-gray-900">
      <Card>
        <h2 className="text-2xl font-bold mb-4">광고형 스탠다드</h2>
        <p className="text-base text-gray-300">1080p</p>
        <p className="text-base text-gray-300">좋은 화질</p>
        <p className="text-base text-gray-300">생각보다 작은 수익 광고</p>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold mb-4">프리미엄</h2>
        <p className="text-base text-gray-300">4K UHD</p>
        <p className="text-base text-gray-300">최고의 화질</p>
        <p className="text-base text-gray-300">광고 없음</p>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold mb-4">베이직</h2>
        <p className="text-base text-gray-300">720p</p>
        <p className="text-base text-gray-300">보통 화질</p>
        <p className="text-base text-gray-300">광고 포함</p>
      </Card>
    </div>
  );
}
