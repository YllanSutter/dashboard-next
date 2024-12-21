import AttendanceChart from "@/components/AttendanceChart"
import CountCharts from "@/components/CountCharts"
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

import Announcements from "@/components/Announcements"
import EventCalendar from "@/components/EventCalendar"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* UserCard */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCard type="student"/>
          <UserCard type="teacher"/>
          <UserCard type="parent"/>
          <UserCard type="staff"/>
        </div>
        {/* MIDDLECHARTS */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* COUNTCHARTS */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountCharts/>
          </div>
          {/* ATTENDANTCHARTS */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChart/>
          </div>
        </div>

        {/* BOTTOMCHARTS */}
        <div className='w-full h-[500Px]'>
          <FinanceChart/>
        </div>
        
      </div>

      {/* RIGHT */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar/>
        <Announcements/>
      </div>
    </div>
  )
}

export default AdminPage