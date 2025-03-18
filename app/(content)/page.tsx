import Content from "@/components/Content"
import Home from "@/public/home.jpg"
const Page = () =>  {
  return (
    <div className="h-screen">
      <div className='h-full'>
        <Content image={Home} text='啦啦啦啦!!!!'/>
      </div>
    </div>
  );
}


export default Page;