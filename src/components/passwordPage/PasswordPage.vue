<template>
  <div class="password--container">
    <div class="stripe">
      <div class="stripe__logo">
        <img
          src="@/assets/images/logo-itau.webp"
          alt="Logo do banco Itaú"
          class="logo__img"
        />
      </div>
    </div>
    <main class="password--container__main">
      <section class="left">
        <h1 class="title">
          Olá {{ name[0].nome[0].toUpperCase() + name[0].nome.substr(1) }}! Esta
          é a página de acesso à sua conta.
        </h1>
        <password-box></password-box>
        <div class="left__info">
          <p>
            Se o nome acima não estiver correto, não continue a operação e ligue
            para o telefone 0300 100 1213.
          </p>
        </div>
      </section>
      <section class="right">
        <div class="right__security--tips">
          <h3 class="right__security--tips__title">Dicas de segurança</h3>
          <p>
            O Itaú nunca faz ligações solicitando senhas ou códigos do iToken.
            Caso liguem para você solicitando estes dados, não informe.
          </p>
          <p>
            A atualização dos aplicativos Itaú ou Guardião 30 horas é automática
            e não requer a digitação de sua senha ou código do iToken.
          </p>
          <p>
            Mantenha sempre atualizado seu antivírus e nunca abra arquivos
            anexados em e-mails cujo remetente seja desconhecido. Assim, você
            evita possíveis ataques em seu computador.
          </p>
        </div>
        <div class="right__digital--suport">
          <h3 class="right__digital--suport__title">Suporte digital</h3>
          <p>
            Converse com a nossa equipe do suporte digital para tirar dúvidas
            sobre acesso da sua conta aqui na internet e no app Itaú.
          </p>
          <p>O atendimento funciona todos os dias da semana, 24h por dia.</p>
          <p>0300 100 1213 (todas as localidades)</p>
        </div>
      </section>
    </main>
    <footer class="footer">
      <div class="footer__about">
        <p>Sobre o Itaú</p>
        <p>Mais segurança</p>
        <p>Precisa de ajuda?</p>
      </div>
      <div class="footer__">
        <img src="youtube-brands.svg" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </footer>
  </div>
</template>
<script>
import PasswordBox from "./PasswordBox.vue";
export default {
  components: {
    PasswordBox,
  },
  data() {
    return {
      name: "",
    };
  },
  props: ["items"],
  created() {
    const url = `http://localhost:3000/clientes`;
    const options = { method: "GET" };
    /*This request's been simplified considering the purpose of the job isn't to deal with the complexity of the backend
        in bank sites like this.
         */
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        this.$store.replaceState(JSON.stringify(data));
        this.name = JSON.parse(this.$store.state);
      })
      .catch((error) => console.log(error));
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/other-mixins.scss";
@import "@/assets/scss/variables.scss";
.password--container {
  background-color: rgba(238, 234, 234, 0.747);
  height: 100vh;
  width: 100vw;

  .stripe {
    background-color: grey;
    height: 13vh;
    width: 100%;

    .stripe__logo {
      align-items: center;
      display: flex;
      height: 13vh;
      margin-left: 5rem;

      .logo__img {
        height: 10vh;
        object-fit: cover;
      }
    }
  }

  .password--container__main {
    display: flex;
    height: 60vh;
    width: 100%;

    .left {
      height: 100%;
      width: 60%;
      .title {
        font-family: $basic-font;
        margin: 1rem 0 1rem 2rem;
      }

      .left__info {
        border: solid #f47404 1.5px;
        border-radius: 5px;
        display: flex;
        height: 15px;
        align-items: center;
        margin: 10px 10px 10px 30px;
        padding: 5px;
        width: 94.6%;

        p {
          font-family: $basic-font;
          font-size: 0.7rem;
          margin-left: 2rem;
        }
      }
    }
    .right {
      @include flex-column;
      align-items: flex-start;
      height: 100%;
      width: 40%;

      .right__security--tips {
        border: solid 1px;
        border-color: grey;
        border-radius: 10px;
        margin-left: 2rem;
        padding: 10px;
        width: 60%;

        .right__security--tips__title {
          font-family: $small-font;
          font-size: 15px;
          font-weight: 800;
          margin: 10px;
        }
        .right__security--tips__title::before {
          content: "⌧";
          color: $itau-color;
        }
      }

      .right__security--tips p {
        font-family: $small-font;
        font-size: 12px;
        font-weight: 300;
        margin: 5px;
      }

      .right__digital--suport {
        border: solid 1px;
        border-color: grey;
        border-radius: 10px;
        margin-left: 2rem;
        min-height: 5rem;
        padding: 10px;
        width: 60%;

        .right__digital--suport__title::before {
          content: "☎";
          color: $itau-color;
        }
        .right__digital--suport__title {
          font-family: $small-font;
          font-size: 15px;
          font-weight: 800;
          margin: 10px;
        }
      }
      .right__digital--suport p {
        font-family: $small-font;
        font-size: 12px;
        font-weight: 300;
        margin: 5px;
      }
    }

    .right p::before {
      content: "●";
      color: $itau-color;
      font-size: 10px;
    }
  }

  .footer {
    border-top: solid 1px #d3d4d3;
    bottom: 0;
    display: flex;
    height: 6vh;
    position: absolute;
    width: 100%;

    .footer__about {
      align-items: center;
      display: flex;
      justify-content: space-around;
      width: 25%;

      p {
        font-family: "Roboto", sans-serif;
        font-size: 0.9rem;
        font-weight: 100;
        opacity: 90%;
      }
    }
  }
}
</style>