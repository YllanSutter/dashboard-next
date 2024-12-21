import Pagination from "@/components/Pagination"
import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"
import { role, eventsData } from '../../../../lib/data';
import Link from "next/link";

type Events = {
    id: number;
    title: string;
    class: string;
    date: string;
    startTime: string;
    endTime: string;
};

const columns = [
    {
        header:"Title", accessor:"title", className:"hidden md:table-cell",
    },
    {
        header:"Class name", accessor:"class",
    },
    {
        header:"Date", accessor:"date", className:"hidden lg:table-cell",
    },
    
    {
        header:"Start Time", accessor:"startTime", className:"hidden lg:table-cell",
    },
    {
        header:"End Time", accessor:"endTime", className:"hidden lg:table-cell",
    },
    {
        header:"Actions", accessor:"actions", className:"hidden lg:table-cell",
    }
]

const EventsList = () => {

    const renderRow = (item:Events)=> (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
            <td className="flex items-center gap-4 p-4">
                <div className='flex flex-col'>
                    <p className="">{item.title}</p>
                </div>
            </td>
            <td className="hidden md:table-cell px-2">{item.class}</td>
            <td className="hidden md:table-cell px-2">{item.date}</td>
            <td className="hidden md:table-cell px-2">{item.startTime}</td>
            <td className="hidden md:table-cell px-2">{item.endTime}</td>
            <td>
                <div className="flex items-center gap-2">
                <Link href={`/list/Eventss/${item.id}`}>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                    <Image src="/edit.png" alt="" width={16} height={16} />
                    </button>
                </Link>
                {role === "admin" && (
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                      <Image src="/delete.png" alt="" width={16} height={16} />
                    </button>
                    // <FormModal table="Events" type="delete" id={item.id}/>
                )}
                </div>
            </td>
        </tr>
    )

    return (
      <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* TOP */}
        <div className='flex items-center justify-between'>
            <h2 className="hidden md:block text-lg font-semibold">All Events</h2>
            <div className='flex flex-col md:flex-row items-center gap-4  w-full md:w-auto'>
                <TableSearch/>
                <div className='flex items-center gap-4 self-end'>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                        <Image src="/filter.png" alt="" width={14} height={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                        <Image src="/sort.png" alt="" width={14} height={14} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
                        <Image src="/plus.png" alt="" width={14} height={14} />
                    </button>
                </div>
            </div>
        </div>
        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={eventsData}/>
        {/* PAGINATION */}
        <Pagination/>
      </div>
    )
  }
  
  export default EventsList