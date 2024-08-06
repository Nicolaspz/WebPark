import { useEffect, useState, useContext } from 'react';
import { canSSRAuth } from '../../utils/canSSRAuth';
import Head from 'next/head';
import styles from './styles.module.scss';

import Header from '../../components/Header';
import { FiRefreshCcw } from 'react-icons/fi';

import { setupAPIClient } from '../../services/api';

import { AuthContext } from '../../contexts/AuthContext';

import Sidebar from '../../components/Sidebar';

type ReservaProps = {
  id: number;
  status: string;
  statusPagamento: string;
  dataInicio: string;
  dataTermino: string;
  vaga: {
    id: number;
    codeVaga: string;
    status: boolean;
  };
  veiculo: string;
  valor: number;
  metodoPagamento: string;
};

interface DashboardProps {
  reservas: ReservaProps[];
}

export default function Dashboard({ reservas }: DashboardProps) {
  const [reservaList, setReservaList] = useState<ReservaProps[]>(reservas);
  const { user } = useContext(AuthContext);

  async function handleRefreshReservas() {
    if (!user) {
      console.error("Usuário não definido.");
      return;
    }

    const apiClient = setupAPIClient();

    try {
      const response = await apiClient.get('/reserva');
      console.log(response.data);
      setReservaList(response.data);
    } catch (error) {
      console.error("Erro ao obter reservas:", error);
    }
  }

  useEffect(() => {
    if (user) {
      handleRefreshReservas();
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Sidebar>
        <Header />
        <div className={styles.container}>
          <main className={styles.container}>
            <div className={styles.containerHeader}>
              <h1>Últimas Reservas</h1>
              <button className={styles.buttonRefresh} onClick={handleRefreshReservas}>
                <FiRefreshCcw size={25} color="#fff" />
                Atualizar
              </button>
            </div>

            <article className={styles.listReservas}>
              {reservaList.length === 0 ? (
                <span className={styles.emptyList}>
                  Nenhuma reserva encontrada...
                </span>
              ) : (
                reservaList.map((item) => (
                  <section key={item.id} className={styles.reservaItem}>
                    <div className={styles.reservaDetails}>
                      <span><strong>Veículo:</strong> {item.veiculo}</span>
                      <span><strong>Início:</strong> {new Date(item.dataInicio).toLocaleString()}</span>
                      <span><strong>Término:</strong> {new Date(item.dataTermino).toLocaleString()}</span>
                      <span><strong>Valor:</strong> R$ {item.valor.toFixed(2)}</span>
                      <span><strong>Método:</strong> {item.metodoPagamento}</span>
                    </div>
                  </section>
                ))
              )}
            </article>
          </main>
        </div>
      </Sidebar>
    </>
  );
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get('/reserva');
  console.log(response.data);

  return {
    props: {
      reservas: response.data,
    },
  };
});
