import type { HeaderProps } from "@/types/headerTypes";

export function Header(headerProps: HeaderProps){
    const navigationObject = {
        items: [
            { name: "Projetos", href: "#" },
            { name: "Sobre Mim", href: "#" },
            { name: "Contatos", href: "#" },
        ]
    }

    return (
      <header
        className={`w-full p-4 ${
          headerProps.backgroundColor || "bg-white"
        } flex justify-between items-center`}
        {...headerProps.props}
      >
        <div className={``}>
          <h1 className={`${headerProps.textColorTitle || "text-black"}`}>
            {headerProps.title}
          </h1>

          <h4 className={`${headerProps.textColor || "text-gray-500"}`}>
            {headerProps.subtitle}
          </h4>
        </div>

        <div>
            {navigationObject.items.map((item) => (
                <a
                    key={item.name}
                    href={item.href}
                    className={`mx-2 ${headerProps.textColor || "text-gray-500"}`}
                >
                    {item.name}
                </a>
            ))
            }
        </div>
      </header>
    );
}