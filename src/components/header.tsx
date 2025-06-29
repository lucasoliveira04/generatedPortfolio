import type { HeaderProps } from "@/types/headerTypes";
import { useState } from "react";
import { Button } from "./ui/button";
import { useEditMode } from "@/hook/useEdit";
import { Input } from "./ui/input";

export function Header(headerProps: HeaderProps){
    const {isEditing, toggleEditing} = useEditMode();

    const [title, setTitle] = useState<string>(headerProps.title || "Seu Título");
    const [subtitle, setSubtitle] = useState<string>(headerProps.subtitle || "Seu Subtítulo");

    const textsObject = {
        title: title,
        subtitle: subtitle
    }

    const inputsObject = {
        title: {
            value: title,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
            className: headerProps.textColorTitle || "text-black font-bold"
        },
        subtitle: {
            value: subtitle,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSubtitle(e.target.value),
            className: headerProps.textColorSubtitle || "text-black"
        }
    }


    const navigationObject = {
        items: [
            { name: "Projetos", href: "#" },
            { name: "Sobre Mim", href: "#" },
            { name: "Contatos", href: "#" },
        ]
    }

    const buttonObject = {
        text: isEditing ? "Salvar" : "Editar",
        onClick: toggleEditing,
        className: isEditing ? "bg-red-500" : "bg-blue-500"
    }


    const renderButtonEdit = () => {
        return (
          <Button
            key={buttonObject.text}
            onClick={buttonObject.onClick}
            className={`text-white ${buttonObject.className} fixed px-4 py-2 rounded cursor-pointer`}
            variant={isEditing ? "destructive" : "default"}
          >
            {buttonObject.text}
          </Button>
        );
    }

    return (
      <>
        <div className="pb-12">{renderButtonEdit()}</div>

        <header
          className={`w-full p-4 ${
            headerProps.backgroundColor || "bg-white"
          } flex justify-between items-center`}
          {...headerProps.props}
        >
          <div>
            {isEditing ? (
              <div className="flex flex-col">
                <Input {...inputsObject.title} />
                <Input {...inputsObject.subtitle} />
              </div>
            ) : (
              <>
                <h1 className={inputsObject.title.className}>
                  {textsObject.title}
                </h1>
                <h4 className={inputsObject.subtitle.className}>
                  {textsObject.subtitle}
                </h4>
              </>
            )}
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
            ))}
          </div>
        </header>
      </>
    );
}