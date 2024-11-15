import SectionContainer from "@/app/components/widthContainer";
import React from "react";
import styles from './styles.module.scss'

interface IHeaderOptions {
    title: string,
    href: string
}

const headerOptions: IHeaderOptions[] = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Sobre",
        href: "/sobre"
    }
]

const Header = () => {
    return (
        <header>
            <SectionContainer bgColor="#1F1F1F">
                <div className={styles.content}>
                    <span>LOGO</span>
                    <nav>
                        <ul className={styles.headerOptions}>
                            {headerOptions.map((item, key) => {
                                return <li className={styles.option}>
                                    <a key={`header-option-${key}`} href={item.href}>{item.title}</a>
                                </li>
                            })}
                        </ul>
                    </nav>
                            .
                </div>
            </SectionContainer>

        </header>)
}

export default Header