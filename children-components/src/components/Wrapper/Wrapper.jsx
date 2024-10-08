import style from '../Wrapper/Wrapper.module.scss'

export function Wrapper(props) {
    return (
        <>
            <div className={style.wrapperContainer}>
                {props.children}
            </div>
        </>
    )
}

export function WrapperHeader(props) {
    return (
        <>
            <h1>{props.title}</h1>
        </>
    )
}

export function WrapperSubHeader(props) {
    return (
        <h2>{props.subTitle}</h2>
    )
}