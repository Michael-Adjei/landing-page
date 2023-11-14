import Image from "next/image"


const Logo = () => {
  return (
    <div>
         <Image quality={100} src='/images/logo/logo-1.png' alt='' 
         width={80} height={80} className=' rounded-xl'/>
    </div>
  )
}

export default Logo
