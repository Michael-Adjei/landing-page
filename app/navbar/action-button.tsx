import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { AlignJustify } from "lucide-react"
  import Link from "next/link"

const ActionButton = () => {
  return (
    <div>
        <div className='block md:hidden '>
           <Sheet>
               <SheetTrigger>
                 <AlignJustify size={32}/>
               </SheetTrigger>
               <SheetContent>
                   <SheetHeader>
                      <SheetDescription>
                         <div className='flex flex-col space-y-4 items-start w-full 
                         text-lg text-black mt-10'>
                            <Link href='/' className='hover:scale-110 duration-300 
                            transition-all ease-in-out'>SignIn</Link>
                            <Link href='/'  className='hover:scale-110 duration-300 
                            transition-all ease-in-out'>Get Started</Link>
                            <Link href='/'  className='hover:scale-110 duration-300 
                            transition-all ease-in-out'>Home</Link>
                            <Link href='/'  className='hover:scale-110 duration-300 
                            transition-all ease-in-out'>Prices</Link>
                            <Link href='/'  className='hover:scale-110 duration-300 
                            transition-all ease-in-out'>Features</Link>
                            <Link href='/'  className='hover:scale-110 duration-300 
                            transition-all ease-in-out'>About Us</Link>
                            <Link href='/'  className='hover:scale-110 duration-300 
                            transition-all ease-in-out'>Contact</Link>
                         </div>
                      </SheetDescription>
                   </SheetHeader>
               </SheetContent>
           </Sheet>
           </div>
          <div className="hidden md:flex md:space-x-4">
                <Button className="text-md" variant='ghost'>Sign In</Button>
                <Button className="text-md bg-slate-500" variant='ghost'>Sign In</Button>
          </div>

        
    </div>
  )
}

export default ActionButton
