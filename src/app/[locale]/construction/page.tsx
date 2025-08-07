import Image from "next/image";
export default function constructionPage() {
    return (
        <div className="flex justify-center">
            <Image src="/under-costruction.svg" width={500} height={500} alt="Under Construction" className="w-[90rem]"/>
        </div>
    );
}