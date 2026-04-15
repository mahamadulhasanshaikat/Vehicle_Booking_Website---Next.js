import { Bike, Bus, Car, CarTaxiFront, Icon, Truck } from 'lucide-react'
import { motion } from 'motion/react'

const VEHICLE_CATEGORIES = [
  { title: "All Vehicles", desc: "Browse the full fleet", Icon: CarTaxiFront, tag: "Popular" },
  { title: "Bikes", desc: "Fast & affordable rides", Icon: Bike, tag: "Quick" },
  { title: "Cars", desc: "Comfortable city travel", Icon: Car, tag: "Comfort" },
  { title: "SUVs", desc: "Premium & spacious", Icon: Car, tag: "Premium" },
  { title: "Vans", desc: "Family & group transport", Icon: Bus, tag: "Family" },
  { title: "Trucks", desc: "Heavy & commercial transport", Icon: Truck, tag: "Cargo" },

]

const VehicleSlider = () => {
  return (
    <div className=" w-full bg-white py-20 px-4 overflow-hidden">
      <div className=" max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className=" flex items-end justify-between mb-10"
        >
          <div>
            <div className=' flex items-center gap-2 mb-3'>
              <div className=' h-px w-8 bg-zinc-900' />
              <span className=' text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400'>Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 leading-none">Vehicles <br/>
            

            </h2>
          </div>


        </motion.div>
      </div>
    </div>
  )
}

export default VehicleSlider