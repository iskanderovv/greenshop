// "use client";
// import { useState } from "react";
// import { ProductCard } from "@/components/custom/product-card";
// import { Input } from "@/components/ui/input";
// import { plants } from "@/data/plants";

// export default function Search() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredPlants = plants.filter((plant) =>
//     plant.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="container">
//       <div className="max-w-[600px] mx-auto mt-10">
//         <Input
//           placeholder="Search..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)} 
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
//         {filteredPlants.length > 0 ? (
//           filteredPlants.map((plant) => (
//             <ProductCard key={plant.id} plant={plant} />
//           ))
//         ) : (
//           <p className="text-center col-span-full">No plants found.</p>
//         )}
//       </div>
//     </div>
//   );
// }
