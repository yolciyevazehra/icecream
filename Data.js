const ad = ["Strawberry Sundae", "Chocolate Cone", "Vanilla Sundae", "Caramel Scoop", "Choco Delight", "Berry Scoop"]

const kateqoriya = ["Sundae", "Cone", "Sundae", "Scoop", "Scoop", "Scoop"]

const aciklama = ["Strawberry syrup, whipped cream", "Classic chocolate dip cone", "Vanilla with caramel drizzle", "Butter caramel, nuts topping", "Triple chocolate scoops", "Mixed berry fresh scoop"]

const cal = ["250 kal, 120g", "180 kal, 95g", "220 kal, 110g", "200 kal, 100g", "310 kal, 140g", "190 kal, 105g"]

const img = [
    "https://themewagon.github.io/Romyk/images/img-1.png",
    "https://themewagon.github.io/Romyk/images/img-2.png",
    "https://themewagon.github.io/Romyk/images/img-1.png",
    "https://themewagon.github.io/Romyk/images/img-3.png",
    "https://themewagon.github.io/Romyk/images/img-4.png",
    "https://themewagon.github.io/Romyk/images/img-5.png"
]

const qiymet = ["$10", "$12", "$8", "$9", "$14", "$10"]

let contain = document.getElementById('contain')
for (let i = 0; i < ad.length; i++) {
    contain.innerHTML += `
    <div class="relative shadow-2xl w-full max-w-[550px] bg-white rounded-xl overflow-hidden mb-12 flex flex-col justify-between">
        
        <div class="bg-[#f2f2f0] h-[280px] w-full p-5 hover:bg-[#faf0c7] flex items-center justify-center transition-colors duration-300">
            <img src="${img[i]}" class="max-w-full h-[80%] object-contain" alt="${ad[i]}">
        </div>

        <div class="absolute top-[240px] left-1/2 -translate-x-1/2 z-10">
            <p class="flex items-center justify-center rounded-full h-[75px] w-[75px] text-xl font-bold bg-white text-black italic">
                ${qiymet[i]}
            </p>
        </div>

        <div class="pt-[45px] pb-6 px-5 flex flex-col items-center justify-between flex-grow text-center">
            
            <div class="flex flex-col items-center gap-1.5 w-full">
                <h3 class="text-2xl font-bold text-gray-800 px-2 min-h-[32px] flex items-center justify-center">${ad[i]}</h3>
                
                <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest">${kateqoriya[i]}</p>
                
                <p class="text-sm text-gray-600 px-4 mt-1 min-h-[40px] flex items-center justify-center leading-relaxed">${aciklama[i]}</p>
                
                <p class="text-xs font-medium text-[#fc95c4] bg-pink-50 px-3 py-1 rounded-full mt-1">${cal[i]}</p>
            </div>
            
            <div class="w-full mt-6">
                <a href="javascript:void(0)" 
                   class="inline-block border-2 py-2 w-[75%] border-[#fc95c4] text-[#fc95c4] font-semibold rounded-full hover:bg-[#fc95c4] hover:text-white transition-all duration-300 text-sm">
                   Add To Cart
                </a>
            </div>
        </div>

    </div>`
}