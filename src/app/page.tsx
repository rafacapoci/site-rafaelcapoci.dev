import Banner from "@/components/Banner";
import Curriculo from "@/components/Curriculo";
import Experiencia from "@/components/Experiencia";
import FormacaoAcademica from "@/components/FormacaoAcademica";
import HeaderMenu from "@/components/HeaderMenu";
import Referencia from "@/components/Referencia";

export default function Home() {
  return (
    <div id="container">
      <HeaderMenu />
      <Banner />
      <Experiencia />
      <FormacaoAcademica />
      <Referencia />
      <Curriculo />
    </div>
  );
}
