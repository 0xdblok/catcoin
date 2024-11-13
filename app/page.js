import Image from "next/image";
import logo from "./logo.png";
export default function Home() {
  return (
<section class="flex flex-col items-center px-20 pt-1.5 pb-24 bg-black max-md:px-5">
  <div class="flex flex-col items-center w-full max-w-[1277px] max-md:max-w-full">
    <h1 class="ml-32 text-3xl font-black leading-none text-zinc-100">
     KEYDOG
    </h1>
    <nav class="flex gap-5 items-start mt-5 max-w-full text-sm leading-none text-center whitespace-nowrap text-zinc-100 w-[458px]">
      <a href="#" class="flex gap-2 self-stretch px-2.5 py-3 rounded-[50px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8af548b6107c2e568b45f7e17ab158c76f5334cc2c6d848a9759ef57c3edc1e4?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" alt="" class="object-contain shrink-0 self-start w-3.5 aspect-[0.82]" />
        <span>DEXTools</span>
      </a>
      <a href="https://x.com/keyboardcatcoin" class="flex gap-1.5 px-2.5 py-3 rounded-[50px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/88e8c12834b4594c5b954d46b79ad098378523f6ad46f96a3987a2b59aebd531?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" alt="" class="object-contain shrink-0 self-start aspect-square w-[15px]" />
        <span>Twitter</span>
      </a>
      <a href="#" class="flex gap-2 px-2.5 py-3 rounded-[50px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f8074d742a8df656fc0feed5de958b79aa90f63afd9a8709bdc397fa7975674?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" alt="" class="object-contain shrink-0 self-start aspect-[1.07] w-[15px]" />
        <span>Solscan</span>
      </a>
      <a href="#" class="flex gap-1.5 px-2.5 py-3 rounded-[50px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b567a9ed18f3ace8d91db0db388b5db67d64e3bc3c81773835f40e850e79a5b?placeholderIfAbsent=true&apiKey=4fbda15560e64e0caf773165d88f4da3" alt="" class="object-contain shrink-0 self-start aspect-[1.07] w-[15px]" />
        <span>Telegram</span>
      </a>
    </nav>
    <div class="mt-20 w-full max-w-[1080px] max-md:mt-10 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <article class="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
          <div class="flex flex-col w-full max-md:mt-4 max-md:max-w-full">
            <div class="flex flex-col pt-3.5 pr-3 max-md:max-w-full">
              <h2 class="self-start ml-5 text-7xl font-thin tracking-tight leading-[79px] text-zinc-100 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                Keyboard <br /> CatCoin
              </h2>
              <p class="z-10 mt-7 mb-0 text-base font-light leading-6 text-zinc-400 max-md:mb-2.5 max-md:max-w-full">
                Trump had proposed the creation of a government efficiency commission as part <br /> of a slate of new economic plans that he unveiled in early September. At the time, <br /> he said had agreed to lead it if he were to secure a return to the White House.
              </p>
            </div>
            <div class="flex gap-5 self-start mt-14 text-sm leading-none text-center text-zinc-100 max-md:mt-10">
              <a href="#" class="px-9 py-5 border border-solid border-zinc-100 rounded-[50px] max-md:px-5">
                Buy on Raydium
              </a>
              <a href="#" class="px-9 py-5 border border-solid border-zinc-100 rounded-[50px] max-md:px-5">
                Buy on Jupiter
              </a>
            </div>
          </div>
        </article>
        <aside class="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
          <Image
          width={400}
          height={400} 
          loading="lazy" src={logo} />
        </aside>
      </div>
    </div>
    <h2 class="mt-16 text-5xl font-thin tracking-tighter leading-none text-center text-white max-md:mt-10">
      TOKENOMICS
    </h2>
    <div class="flex flex-wrap gap-5 justify-between mt-14 max-w-full w-[1012px] max-md:mt-10">
      <div class="flex gap-1.5 self-start text-base">
        <span class="grow font-thin text-center text-yellow-300">(0%)</span>
        <span class="font-light text-zinc-400">Taxes</span>
      </div>
      <div class="flex flex-wrap gap-10 font-thin text-center max-md:max-w-full">
        <span class="self-start text-base text-yellow-300">LP Burned</span>
        <p class="text-3xl leading-7 uppercase text-zinc-400">
          1,000,000,000 <br /> SUPPLY
        </p>
      </div>
    </div>
  
    <footer class="self-end mt-10 mr-11 text-base font-light text-zinc-400 max-md:mr-2.5">
      All rights reserved
    </footer>
  </div>
</section>
  );
}
