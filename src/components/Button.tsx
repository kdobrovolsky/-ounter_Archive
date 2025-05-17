
type ButtonProps = {
    title: string
    onClick: () => void
    disable?: boolean
    className?: string
}

export const Button = ({title,onClick,disable,className}:ButtonProps) => {
    return(
        <button onClick={onClick} disabled={disable} className={className}>{title}</button>
    )
}