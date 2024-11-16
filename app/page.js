import Image from "next/image";
import logo from "./logo.png";
export default function Home() {
  return (
<section class="bg-[url('./bg.jpg')]  bg-cover bg-center pt-20 w-screen   flex flex-col items-center  pt-1.5 pb-24 bg-black max-md:px-5">
  <div class="flex flex-col items-center w-full max-w-[1277px] max-md:max-w-full">
    <h1 class="ml-32 text-3xl font-black leading-none text-zinc-100">
     KEYBOARDDOG
    </h1>
    <nav class="flex gap-5 items-center justify-center mt-5 max-w-full text-sm leading-none text-center whitespace-nowrap text-zinc-100 w-[458px]">
   
      <a href="https://x.com/keyboardcatcoin" class="flex gap-1.5 px-2.5 py-3 rounded-[50px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/88e8c12834b4594c5b954d46b79ad098378523f6ad46f96a3987a2b59aebd531?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" alt="" class="object-contain shrink-0 self-start aspect-square w-[15px]" />
        <span>Twitter</span>
      </a>
      <a href="https://basescan.org/" class="flex gap-2 px-2.5 py-3 rounded-[50px]">
        <img loading="lazy" src="https://basescan.org/assets/base/images/svg/logos/logo-light.svg?v=24.11.1.0" alt="" class="object-contain shrink-0 self-start   w-[35px] pt-1" />
        <span>Basescan</span>
      </a>
      <a href="https://t.me/keyboarddogchat" class="flex gap-1.5 px-2.5 py-3 rounded-[50px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b567a9ed18f3ace8d91db0db388b5db67d64e3bc3c81773835f40e850e79a5b?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" alt="" class="object-contain shrink-0 self-start aspect-[1.07] w-[15px]" />
        <span>Telegram</span>
      </a>
    </nav>
    <div class=" bg-[url('./bg.jpg')] px-10  bg-cover bg-center mt-20 w-full    max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-[62%] max-md:ml-0 max-md:w-full ">
          <div class="flex flex-col w-full max-md:mt-4 max-md:max-w-full ml-12">
            <div class="flex flex-col pt-3.5 pr-3 max-md:max-w-full">
              <h2 class="text-center mr-16 ml-5 text-7xl font-thin tracking-tight leading-[79px] text-zinc-100 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Keyboard <br /> DogCoin
              </h2>
              <p class="mr-12 z-10 mt-7 mb-0 text-base font-light leading-6 text-zinc-400 max-md:mb-2.5 max-md:max-w-full">
              KEYDOG - your musical mastermind on base chain 🎹 not just any weenie, but a fedora-wearing dachshund that turned defi into his personal concert hall. catch him dropping the coldest piano beats while other dogs still learning how to sit 
              </p>
            </div>
            <div class="flex mr-12 gap-5 mt-14 justify-center text-sm leading-none text-center text-zinc-100 max-md:mt-10">
              <a href="#" class="px-9 py-5 border-2  border-solid border-blue-700 rounded-[50px] max-md:px-5">
                Buy on Uniswap
              </a>
            </div>
          </div>
        </article>
       
          <div className=" ">
          <Image

          className="flex flex-col "
          width={600}
          height={600} 
          loading="lazy" src={logo} /></div>
    
      </div>
    </div>
    <h2 class="mt-16 text-5xl  tracking-tighter leading-none text-center text-white max-md:mt-10">
      TOKENOMICS
    </h2>
    <div class="flex flex-wrap gap-5 justify-between mt-14 max-w-full w-[1012px] max-md:mt-10">
      <div class="flex gap-1.5 self-start text-base">
        <span class="grow  text-center font-bold text-blue-700">(0%)</span>
        <span class="font-light font-bold text-zinc-200">Taxes</span>
      </div>
      <div class="flex flex-wrap gap-10 font-thin text-center max-md:max-w-full">
        <span class="self-start text-base font-bold text-blue-700">LP Burned</span>
        <p class="text-3xl leading-7 uppercase text-zinc-200">
          1,000,000,000 <br /> SUPPLY
        </p>
      </div>
      
    </div><h2 class="mt-16 text-4xl  tracking-tighter leading-none text-center text-white max-md:mt-10">
  CA :<p className="pt-6 font-light text-zinc-200 text-xl">0x4c20dFc91baDAdd93A2F392138f5d3b578338a9A</p> 
    </h2>
  
    <footer class="self-end mt-10 mr-11 text-base font-light text-zinc-400 max-md:mr-2.5">
      All rights reserved
    </footer>
  </div>
</section>
  );
}
