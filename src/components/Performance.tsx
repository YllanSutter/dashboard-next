"use client";
import Image from 'next/image';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 92, fill: "#C3EBFA" },
  { name: 'Group B', value: 8, fill:"#FAE27C" },
];

const Performance = () => {
  return (
    <div className='bg-white p-4 rounded-md h-80 relative'>
        <div className='flex g-4 items-center justify-between'>
            <h2 className='text-xl font-semibold'>Performances</h2>
            <Image src="/moreDark.png" alt="" width={16} height={16}/>
        </div>
         <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
            <Pie
                dataKey="value"
                startAngle={180}
                endAngle={0}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                fill="#8884d8"
            />
            </PieChart>
        </ResponsiveContainer>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h2 className='font-bold text-3xl'>9.2</h2>
            <p className='text-xs text-gray-300'>Of 10 max</p>
        </div>
        <div className='absolute left-1/2 bottom-16 transform -translate-x-1/2 text-center'>
            1st Semester / 2nd Semester
        </div>
    </div>
   
  )
}

export default Performance