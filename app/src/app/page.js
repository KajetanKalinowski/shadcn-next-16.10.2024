'use client'
import { useState,useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { TrendingDown,TrendingUp } from 'lucide-react';
export default function Home() {
  const [kursy,setKursy] = useState([])

  
  
  useEffect(()=>{
    const getData = async ()=>{
    try{
      
      const data = await fetch(`https://api.nbp.pl/api/cenyzlota/last/30/?format=json`)
      const json = await data.json()
      setKursy(json)
      console.log(json)
  }catch(err){
    console.log(err)
  }finally{

  }}
      
  getData()
  },[])
  return(
    <div className="w-full flex flex-wrap-reverse flex-row-reverse items-center gap-5">
  {kursy && kursy.map((item,idx)=>{
    const previousItem = kursy[idx - 1]; 
    
    
    let priceChange = null;
    let priceDifference = 0;

    if (previousItem) {
      
      priceChange = item.cena > previousItem.cena ? "up" : item.cena < previousItem.cena ? "down" : "same";
      
      priceDifference = item.cena - previousItem.cena;
    }
  
  return(
    
        <div key={idx}>
        <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border md:min-w-[350px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex flex-col h-[200px] items-center justify-center p-6">
        <h1 className="text-lg font-extrabold tracking-tight scale-[1.5]">{item.cena.toFixed(2)} zł</h1>
        <h1 className="text-sm text-foreground text-gray-600">{item.data}</h1>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={50}>
            <div className="flex flex-col h-full items-center justify-center p-6">
            {priceChange == "up" && <TrendingUp color="green" size={60} />}  
            {priceChange == "down" && <TrendingDown color="red" size={60} />} 

            {priceDifference != 0 && (
            <div>
              {priceChange == "up" ? "+" : ""}{priceDifference.toFixed(2)} zł
            </div>
          )}
            </div>
          </ResizablePanel>
          <ResizableHandle />
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
      </div>
    
    
  );
})}
</div>
  );
}
