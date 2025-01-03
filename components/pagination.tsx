"use client";
import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  pages: {
    url: string;
    label: string;
    active: boolean;
    id:number
  }[];
}
export default function Pagination({ pages }: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();
  
  function handleClickPage(pageNumber: number) {
    const params = new URLSearchParams(searchParams);
    if(pageNumber > 1){
      params.set('page', String(pageNumber));
    }else{
      params.delete('page');
    }
    replace(`${pathname}?${params.toString()}`,{scroll: false})
  }
  return (
    <PaginationComponent>
      <PaginationContent>
      <PaginationItem onClick={()=>handleClickPage(Number(searchParams.get('page'))- 1)}>
          <PaginationPrevious />
        </PaginationItem>
        {pages.map((p) => {
          if (p.label.includes('Anterior') || p.label.includes("Próximo")) {
            return null;
          }
          if(p.label === '...'){
            return (
            <PaginationItem className="hidden md:inline-flex" key={p.id}>
              <PaginationEllipsis />
            </PaginationItem>
            )
          }

          return (
            <PaginationItem key={p.id} className="cursor-pointer">
              <PaginationLink
                isActive={p.active}
                dangerouslySetInnerHTML={{ __html: p.label }}
                onClick={() => handleClickPage(Number(p.label))}
              ></PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem onClick={()=>handleClickPage(Number(searchParams.get('page'))+ 1)}>
          <PaginationNext />
        </PaginationItem>

        {/* <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink isActive={true}>1</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink>2</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink>3</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink>8</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink>9</PaginationLink>
        </PaginationItem>
        <PaginationItem className="hidden md:inline-flex">
          <PaginationLink>10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext />
        </PaginationItem> */}
      </PaginationContent>
    </PaginationComponent>
  );
}
