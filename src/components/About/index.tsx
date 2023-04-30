import "../../styles/resume.scss";
import { AboutType } from "../../types/AboutType";

interface AboutProps {
  about: AboutType;
}

import "../../styles/about.scss";

export function About({ about }: AboutProps) {
  const { image } = about;

  return (
    <section
      id="about"
      className="about"
      aria-label="Seção sobre mim"
      data-animate="left"
    >
      <div className="container">
        <div className="image" aria-label="Imagem">
          <img src={image} alt="Imagem de perfil" width={225} loading="lazy" />
        </div>
        <div className="description-wrapper" aria-label="Descrição">
          <div className="title" aria-label="Título da descrição">
            <h2>Sobre mim</h2>
          </div>

          <div className="description" aria-label="Descrição">
            <p>
              Meu nome é Arthur, e desde criança sempre fui apaixonado por
              tecnologia. Aos quatorze anos, decidi fazer um curso de técnico em
              montagem e manutenção de computadores. No entanto, após me formar
              em 2013, acabei desanimando com esse mercado de trabalho e desisti
              de continuar os estudos na área. <br />
              <br />
              Sem saber qual carreira seguir, em 2016 tive que iniciar no
              mercado de trabalho. Trabalhei por alguns anos como auxiliar de
              serviços gerais em um supermercado da minha cidade, mas por estar
              fazendo algo que eu não gostava, eu pensava muito a respeito do
              meu futuro. Isso me levou a dedicar mais para descobrir qual
              carreira seguir. Depois de um tempo, cheguei à conclusão de que,
              mesmo o mercado de hardware não fornecendo o futuro que eu
              desejava, eu poderia recorrer ao mercado de software. Em 2019,
              resolvi iniciar a faculdade de engenharia de software. <br />
              <br />
              Hoje, após quatro anos, sou formado em engenharia de software e
              atuo como desenvolvedor front-end web há dois anos. A cada dia que
              passa, tenho mais certeza que fiz a escolha certa. Às vezes, sinto
              que deveria ter começado antes, mas os erros que cometi me
              ensinaram muitas coisas valiosas. Eles me trouxeram até aqui, e
              por isso, sou grato a Deus pelos meus erros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
