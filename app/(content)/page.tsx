import Content from "@/components/Content"
import Home from "@/public/home.jpg"
const Page = () =>  {
  return (
    <div className="h-screen">
      <div className='h-full'>
        <Content image={Home} text='Welcome to my home!!!!'/>
      </div>
    </div>
  );
}


export default Page;