'use client'
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"  
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
export default function Home(){
    const [licznik,setLicznik] = useState(0)
    const [zera,setZera] = useState(0)
    const plus = ()=>{
        setLicznik(licznik+1)
    }
    const minus = ()=>{
        setLicznik(licznik-1)
    }
    const zeruj = ()=>{
        setLicznik(0)
        setZera(zera+1)
    }
    return(
        <div className="flex flex-col justify-center items-center w-full h-screen gap-5">
            <HoverCard>
            <HoverCardTrigger><h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {licznik}
                </h1> </HoverCardTrigger>
                <HoverCardContent>
                <p>Liczba: {licznik}.</p>
                <p>Zerowano: {zera} razy.</p>
                </HoverCardContent>
            </HoverCard>
            <div className="flex flex-row gap-2">
            <Button disabled={licznik==0 ? true : false} onClick={minus} className="m-5">-1</Button>
            <Button disabled={licznik==10 ? true : false} onClick={plus} className="m-5">+1</Button>
            
            </div>
            <div><AlertDialog>
  <AlertDialogTrigger asChild><Button variant="destructive">Zeruj licznik</Button></AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
        {licznik==0 ? <AlertDialogTitle>Licznik jest już równy zero</AlertDialogTitle> : <AlertDialogTitle>Dlaczego tak poważnie?</AlertDialogTitle>}
      <AlertDialogDescription>
        Uwaga to wyzeruje licznik!
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Nie</AlertDialogCancel>
      <AlertDialogAction onClick={zeruj} disabled={licznik==0 ? true : false}>Okej</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog></div>
        </div>
    )
}