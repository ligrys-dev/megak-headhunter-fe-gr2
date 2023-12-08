import { useState, useContext } from "react"
import { EditStudentDataContext } from "src/context/EditStudentDataContext"

interface Props {
    onChange: Function;
}

export const AddLink = (props: Props) => {
    const {form} = useContext(EditStudentDataContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    

    const addPortfolioUrl = (link: string) => {
        if (form.portfolioUrls){
            const newLinkArray = [
                ...form.portfolioUrls,
                link,
            ]
            props.onChange('portfolioUrls', newLinkArray)
        }

        if (!form.portfolioUrls){
            const newLinkArray = [link]
            props.onChange('portfolioUrls', newLinkArray)
        }
    }


    if (!isOpen) {
        return (
            <button onChange={e => setIsOpen(true)}>Dodaj link</button>
        )
    }
    
    return (
        <input onChange={e => addPortfolioUrl(e.target.value)} value={form.portfolioUrls ? form.portfolioUrls : []}/>
    )
}