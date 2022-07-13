import './Inicio.css';
import bolsa from '../../assets/img/bolsa.jpg';
import bolsaYtermo from '../../assets/img/bolsaYtermo.jpg';

function Inicio() {
  return (
    <main className='main__inicio'>
      <h2>Inicio</h2>
      <section className='main__inicio-sections'>
        <section className="main__inicio-blog">
          <h3>Blog</h3>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iusto consequatur laborum cumque quia, doloremque sint sunt, excepturi quibusdam in, inventore tempora reiciendis. Labore, quidem molestiae iusto nemo repellat dolorum.</p>
            <small>28 de julio de 2022 a las 20:42hs</small>
          </div>
        </section>
        <section className="main__inicio-tienda">
          <h3>Tienda</h3>
          <div className='main__inicio-tienda-imagenes'>
            <img src={bolsaYtermo} alt="Bolsa" />
            <img src={bolsa} alt="Bolsa" />
          </div>
        </section>
      </section>
    </main>
  )
}

export default Inicio;