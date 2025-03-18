import Content from '@/components/Content';
import Image from 'next/image';
import SettingsImage from '@/public/settings.jpg';

export const metadata = {
  title: 'Settings',
  description: 'Generated by create next app',
};

export default function Settings() {
  return (
    <div className="h-screen">
      <div className="h-full">
        <Content image={SettingsImage} text="Welcome to settings page!!!!" />
      </div>
    </div>
  );
}
