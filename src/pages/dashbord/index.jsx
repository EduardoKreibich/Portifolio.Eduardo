import { useEffect } from "react"
import { Link, Navigate } from "react-router-dom"



export const Portifolio = () => {
    return(
        <>
            <header>Contato</header>
                <p>email: kreibicheduardo@gmail.com</p>
                <p>linkedin: https://www.linkedin.com/in/eduardo-kreibich-5971a51a2/</p>
                <p>instagram: https://www.instagram.com/dudukreibich/</p>
            <section>Sobre</section>
                <p>
                Olá! Sou entusiasta da tecnologia, apaixonado por jogos e estou prestes a concluir meu curso técnico em programação fullstack. Ao longo do meu percurso de aprendizado, adquiri habilidades em diversas tecnologias, incluindo HTML, CSS e JavaScript para a construção de interfaces web interativas. Trabalhei com bibliotecas e frameworks modernos como React, além de ter experiência em desenvolvimento de servidores usando Express e Node.js.

                No mundo do banco de dados, explorei o SQLServer e o PostgreSQL, garantindo uma sólida compreensão da manipulação e gerenciamento de dados. Além disso, expandi meu conhecimento para Python e seu framework Django, ampliando assim meu conjunto de habilidades.

                Amo desafios e sou extremamente resiliente. Encaro cada obstáculo como uma oportunidade de aprendizado e crescimento. Estou animado com a perspectiva de aplicar essas competências em projetos desafiadores e inovadores. Sou dedicado, curioso e estou sempre em busca de novos conhecimentos para me manter atualizado no dinâmico universo da programação e desenvolvimento de software. Vamos criar algo incrível juntos!
                </p>
            <section>Projetos</section>
            <p>E-comerce hamburgueria</p>
            <button>
                <a href="https://hamburguria-kenzie-cdfrv2oek-eduardokreibich.vercel.app/" target="blank">Hambugueria</a>
            </button>

            <p>Plataforma de Lançamentos Financeiros</p>
            <button>
                <a href="https://nukenzie-2twykubd1-eduardokreibich.vercel.app/" target="blank">Nu Kenzie</a>
            </button>
            <section>Obrigado pela visita.</section>
        </>
    )
}