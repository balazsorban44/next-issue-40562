import Image from "next/image"
import img from "../public/img.png"
export default function Home() {
  return <Image src={img} alt="Vercel Logo" width={72} height={16} />
}
