"use client";
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
    name: 'Total',
    count: 100,
    fill: '#fff',
    },
  {
    name: 'Girls',
    count: 40,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 60,
    fill: '#C3EBFA',
  },
];

const CountCharts = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* TITLE */}
        <div className='flex justify-between items-center'>
            <h2 className='text-lg font-semibold'>Students</h2>
            <Image src="/moreDark.png" alt="" width={20} height={20}/>
        </div>
        {/* CHARTS */}
        <div className="relative w-full h-[75%]">
            <ResponsiveContainer>
                <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                <RadialBar
                    background
                    dataKey="count"
                />
                </RadialBarChart>
            </ResponsiveContainer>
            <Image src="/maleFemale.png" alt="" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
        </div>
        {/* BOTTOM */}
        <div className='flex justify-center gap-16'>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-lamaSky rounded-full'></div>
                <h3 className='font-bold'>1,234</h3>
                <h4 className='text-xs text-gray-500'>Boys (55%)</h4>
            </div>
            <div className='flex flex-col gap-1'>
                <div className='w-5 h-5 bg-lamaYellow rounded-full'></div>
                <h3 className='font-bold'>1,144</h3>
                <h4 className='text-xs text-gray-500'>Girls (45%)</h4>
            </div>
        </div>
    </div>
  )
}

export default CountCharts