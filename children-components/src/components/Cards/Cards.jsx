import style from '../Cards/Cards.module.scss'
export function Cards(props) {
    return (
        <>
            <div className={style.cardContainer}>
                {props.children}
            </div>
        </>
    )
}