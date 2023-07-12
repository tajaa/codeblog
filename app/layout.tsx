import Link from "next/link";
import "../styles/globals.css"

export const metadata = {
  title: 'Twin Primes',
  description: 'Art of Computer Science ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header className="text-center bg-slate-800 p-8 my-6 rounded-md">
      <div>
        <Link href="/"> <h1 className="text-3xl font-bold mb-1 ">
          Art of Code
        </h1></Link>
        <p className="text-orange-400 text-xl">A Computer Science Blog</p>
      <br/>
      </div>
    </header>
  ) ;

  const footer = (
    <footer>
      <div className="border-t border-slate-300 mt-6 py-6 text-center text-slate-400">
        <br/>
        <h3>
          Devloped by Bobby
        </h3>
      </div>
    </footer>
  )
  return (
    <html lang="en">
      <head/>
      
    
        <body className="bg-black text-white"> 
          <div className="mx-auto  max-w-2xl px-6">
            {header}
            {children}
            {footer}
          </div></body>

     
    </html>
  )
}
