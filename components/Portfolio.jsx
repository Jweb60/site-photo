import Image from "next/image"

const Portfolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image 
            src='https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            alt="/"  
            layout="responsive"
            width='677'
            height='451'
          />
        </div>
        <div className="w-full h-full">
          <Image 
            src='https://images.unsplash.com/photo-1545330785-15356daae141?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=990&q=80'
            width='215'          
            height='217'
            alt="/"  
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image 
            src='https://images.unsplash.com/photo-1541637593725-923467404d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            width='215'          
            height='217'
            alt="/"  
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image 
            src='https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            width='215'          
            height='217'
            alt="/"  
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image 
            src='https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1110&q=80'
            width='215'          
            height='217'
            alt="/"  
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image 
            src='https://images.unsplash.com/photo-1553550765-41e7dff2bd41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            width='215'          
            height='217'
            alt="/"  
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}
export default Portfolio