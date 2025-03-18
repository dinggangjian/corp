import type { AppProps } from 'next/app';
import Image from 'next/image';
import Content from "@/components/Content"
import Home from "@/public/home.jpg"
export default function Page(props: AppProps) {
  return (
    <div className="h-screen">
      <div className='h-full'>
        <Content image={Home} text='Welcome to my home!!!!'/>
      </div>
    </div>
  );
}
