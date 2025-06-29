import { Header } from "@/components/header";

export function UserPage() {  
    
    const headerObject = {
        title: "Seu titulo",
        subtitle: "Seu subtitulo (opcional)",
        backgroundColor: "bg-gray-300",
        textColorTitle: "text-black font-bold",
        textColorSubtitle: "text-black font-semibold",
    }

    return(
        <>
            <Header
                {...headerObject}
            />
        </>
    )
}