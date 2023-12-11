import { useState, useContext } from "react"
import { EditStudentDataContext } from "src/context/EditStudentDataContext"

type KeyType = 'portfolioUrls' | 'projectUrls'

interface Props {
    onChange: Function;
    typeOfKey: KeyType;
}

export const AddLink = (props: Props) => {
    const {form} = useContext(EditStudentDataContext);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [linkPlaceholder, setLinkPlaceholder] = useState<string>('')
    
    

    const addPortfolioUrl = (e: MouseEvent, key: KeyType, link: string) => {
        e.preventDefault();
        console.log(key);
        
        if (!form[key]){
            const newLinkArray = [link]
            props.onChange(key, newLinkArray)
        }

        if (key === 'portfolioUrls' && form['portfolioUrls']){
            const newLinkArray = [
                ...form['portfolioUrls'],
                link,
            ]
            props.onChange('portfolioUrls', newLinkArray)
        }
        
        if(key === 'projectUrls' && form['projectUrls']){
            const newLinkArray = [
                ...form['projectUrls'],
                link,
            ]
            props.onChange('projectUrls', newLinkArray)
        }
    }

    if (!isOpen) {
        return (
            <button onClick={e => setIsOpen(true)}>Dodaj link</button>
        )
    }
    
    return (
        <>
        <input onChange={e => setLinkPlaceholder(e.target.value)} value={linkPlaceholder}/>
        <button onClick={e => addPortfolioUrl(e, props.typeOfKey, linkPlaceholder)}>Dodaj Link</button>
        </>
    )
}