import { useState, useEffect } from 'react'
import Cabecalho from './components/Cabecalho'
import FormularioNotas from './components/FormularioNotas'
import CartaoResultado from './components/CartaoResultado'
import HistoricoTurma from './components/HistoricoTurma'
import ContadorSituacao from './components/ContadorSituacao'
import './App.css'

function App() {

  // Recupera o tema salvo no navegador
  const [temaEscuro, setTemaEscuro] = useState(() => {
    return localStorage.getItem('temaEscuro') === 'true'
  })

  const [resultado, setResultado] = useState(null)

  // Estado do tipo array para o histórico da turma
  const [historico, setHistorico] = useState([])

  // Salva a preferência de tema
  useEffect(() => {
    localStorage.setItem('temaEscuro', String(temaEscuro))
  }, [temaEscuro])

  function trocarTema() {
    setTemaEscuro(!temaEscuro)
  }

  // Atualiza o resultado e registra o cálculo
  function registrarResultado(dados) {
    setResultado(dados)

    if (dados !== null) {

      // Ternário para definir a situação do aluno
      const situacao = dados.media >= 7
        ? 'Aprovado'
        : dados.media >= 5
          ? 'Recuperação'
          : 'Reprovado'

      setHistorico((anterior) => [
        ...anterior,
        { ...dados, situacao }
      ])
    }
  }

  return (
    <div className={temaEscuro ? 'app app--escuro' : 'app'}>
      <Cabecalho
        temaEscuro={temaEscuro}
        aoTrocarTema={trocarTema}
      />

      <main className="app__conteudo">
        <FormularioNotas aoCalcular={registrarResultado} />

        <CartaoResultado resultado={resultado} />
        
        <ContadorSituacao historico={historico} />
        <HistoricoTurma historico={historico} />
      </main>
    </div>
  )
}

export default App