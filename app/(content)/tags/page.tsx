import Content from '@/components/Content';
import Image from 'next/image';
import TagsImage from '@/public/tags.jpg';
// 静态元数据
export const metadata = {
  title: 'Tags',
  description: 'Generated by create next app',
};
export default function Tags() {
  return (
    <div className="h-screen">
      <div className="h-full">
        <Content image={TagsImage} text="Welcome to tags page!!!!" />
      </div>
    </div>
  );
}
