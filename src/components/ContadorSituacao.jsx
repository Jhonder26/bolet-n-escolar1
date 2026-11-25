import './ContadorSituacao.css'

function ContadorSituacao({ historico }) {

  // Contagem de alunos por situação
  const aprovados = historico.filter(
    (aluno) => aluno.situacao === 'Aprovado'
  ).length

  const recuperacao = historico.filter(
    (aluno) => aluno.situacao === 'Recuperação'
  ).length

  const reprovados = historico.filter(
    (aluno) => aluno.situacao === 'Reprovado'
  ).length

  return (
    <section className="contador">
      <h2>Resumo da turma</h2>

      <div className="contador__grid">

        <div className="contador__item contador--aprovado">
          <strong>{aprovados}</strong>
          <span>Aprovados</span>
        </div>

        <div className="contador__item contador--recuperacao">
          <strong>{recuperacao}</strong>
          <span>Recuperação</span>
        </div>

        <div className="contador__item contador--reprovado">
          <strong>{reprovados}</strong>
          <span>Reprovados</span>
        </div>

      </div>

      <p className="contador__total">
        Total de registros: {historico.length}
      </p>
    </section>
  )
}

export default ContadorSituacao