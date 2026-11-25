import './HistoricoTurma.css'

function HistoricoTurma({ historico }) {
  return (
    <section className="historico">
      <h2>Histórico da turma</h2>

      {historico.length === 0 ? (
        <p className="historico__vazio">
          Nenhum aluno registrado.
        </p>
      ) : (
        <div className="historico__tabela">
          <table>
            <thead>
              <tr>
                <th>Aluno</th>
                <th>Média</th>
                <th>Situação</th>
              </tr>
            </thead>

            <tbody>
              {historico.map((aluno, indice) => (
                <tr key={indice}>
                  <td>{aluno.nome}</td>
                  <td>{aluno.media.toFixed(1)}</td>
                  <td className={
                    aluno.media >= 7
                      ? 'historico__aprovado'
                      : aluno.media >= 5
                        ? 'historico__recuperacao'
                        : 'historico__reprovado'
                  }>
                    {aluno.situacao}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="historico__total">
        Total de registros: {historico.length}
      </p>
    </section>
  )
}

export default HistoricoTurma