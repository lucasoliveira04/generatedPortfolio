import { Header } from "@/components/header";

export function UserPage() {  
    
    const headerObject = {
        title: "User Page",
        subtitle: "Welcome to the user page",
        backgroundColor: "bg-gray-300",
        textColorTitle: "text-black",
        textColorSubtitle: "text-gray-200",
    }

    return(
        <>
            <Header
                {...headerObject}
            />
        </>
    )
}