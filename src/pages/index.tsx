import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Email } from '../components/Email';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Email/>
   </>
  )
}
