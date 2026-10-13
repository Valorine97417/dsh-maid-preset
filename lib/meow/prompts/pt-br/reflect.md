Tarefa de reflexão de memória
Reveja seu histórico de conversa.

[1] Primeiro, passe por dois portões: vale guardar? é duplicata?
Portão um - vale guardar? Só guarde a informação que, se uma sessão futura não a soubesse, causaria uma armadilha, um desvio ou uma pergunta repetida ao usuário.
- Vale guardar: preferências e linhas vermelhas do usuário, erros em que você foi corrigido, armadilhas e suas soluções, decisões importantes e o raciocínio por trás delas, estado e conclusões do projeto, caminhos e nomes próprios que você vai precisar de novo.
- Não vale guardar: operações pontuais, qualquer coisa que você possa consultar nos arquivos ou no código na hora, estado intermediário temporário, amenidades e humor, estado antigo já superado por progresso posterior.
- Pergunte a si mesmo: se esta entrada for recuperada em outra sessão daqui a três meses, ela ainda é útil? Se não for, não a escreva.
- Prefira menos: 3 entradas sólidas valem mais que 10 pedaços de ruído - ruído come espaço da injeção inicial e polui a recuperação. Se nesta rodada realmente não há nada que valha guardar, responda "nenhuma memória necessária"; não invente para parecer ocupado.

Portão dois - é duplicata? Antes de escrever, verifique duplicatas. Se o armazenamento já tem algo próximo, não crie outra entrada.
- Verifique primeiro: use memory_search nos termos centrais; para entradas que você já suspeita serem semelhantes, compare com memory_find_similar.
- Mesmo assunto, mesma conclusão -> não adicione. Apenas acrescente detalhe ou mude o status via memory_update na entrada antiga; se a entrada antiga está obsoleta, marque-a archived primeiro, depois escreva a nova.
- Mesmo assunto, conclusão mudou -> atualize a entrada antiga com memory_update (mantenha o id, para o histórico continuar rastreável); não deixe antiga e nova coexistirem.
- Palavras diferentes, na verdade o mesmo assunto -> trate como duplicata e siga os casos acima.
- Realmente dois assuntos diferentes -> só então crie com memory_remember; mantenha as palavras-chave longe de palavras idênticas às da entrada antiga, para que cada uma continue recuperável.
- Nota de reserva: memory_remember funde automaticamente em uma entrada existente quando a similaridade de conteúdo atinge 0,8 (retorna merged), mas ele só vê o texto superficial e não distingue "duas formas de dizer a mesma decisão" - a checagem de duplicatas continua sendo sua.

[2] Desde a última [Tarefa de reflexão de memória], ao longo de todos aqueles turnos, há algo novo que valha a pena lembrar entre sessões? Use memory_remember para adicioná-lo.
1. Projetos já no armazenamento de memória: {projectList}. Você acha que um novo projeto deveria ser adicionado? -> Adicione uma memória para o novo projeto.
2. Você foi corrigido pelo usuário? Foi elogiado? Caiu em alguma armadilha, e como a resolveu no fim? Guarde isso como memórias lesson.
- Registre seus erros, mas também seus próprios desempenhos excelentes, as armadilhas em que caiu e como você resolveu os problemas com esperteza no fim.
- Se for algo que o usuário corrigiu, mantenha a flag corrected;
3. Adicione entradas a seu critério quando qualquer um destes casos se aplicar:
- O usuário declarou uma preferência de comunicação / de trabalho / de código? -> Preferências globais vão em user; as específicas de projeto vão em project.
- O usuário estabeleceu um princípio de design ou uma regra de comportamento? -> Registre em rules.
- O usuário disse algo ao explicar o pensamento de design do projeto, o framework ou o raciocínio? -> Preserve as palavras dele, no level certo.
- Algum fato, conclusão ou decisão importante?

[3] Reveja cada memória injetada neste contexto, pese-a contra seu progresso mais recente e decida: algo precisa de atualização?
1. Há alguma entrada que você agora tem certeza que está desatualizada (o próprio usuário disse, ou mudou de ideia)? -> Atualize o content dela; não a deixe parada lá.
2. Você encontrou uma entrada errada, ou que te induziu ativamente ao erro? -> Corrija-a, ou marque-a como archived (que significa excluir);
3. Algum todo ou topic foi concluído? -> Marque-os como stale (que significa done);
4. Alguma entrada foi injetada em um momento completamente irrazoável, sem relação com a tarefa em questão? -> Isso significa que as palavras-chave dela estão erradas; atualize-as;
5. Alguma entrada é na verdade duplicata, ou totalmente coberta por outra entrada? -> Mantenha a que tem mais informação e marque o resto como archived; se der para fundir, use memory_update para fundir primeiro, depois arquive.

[4] Requisitos gerais ao escrever memórias
1. As regras para escrever memórias estão no system prompt. Coloque cada memória no level certo e sob o rótulo certo.
2. Vale repetir, o critério para palavras-chave:
- Extraia de 8 a 13 palavras-chave para a recuperação
- Pense ao contrário: "quais palavras no prompt de um usuário deveriam fazer esta memória aparecer?"
- Não o nome do projeto — detalhes específicos da própria memória.
- Prefira entidades centrais, o centro semântico, nomes próprios.
- Forma dicionarizada simples: o tokenizador faz stemming das palavras em inglês, então um substantivo no singular já casa com seu plural; pule stopwords, elas não recuperam nada.
3. Se você acha que não há nada importante e nada a adicionar ou atualizar, responda apenas "nenhuma memória necessária" e não chame ferramenta nenhuma.

Você pode chamar várias ferramentas em um turno — por favor, conclua todas as chamadas de ferramenta desta tarefa em uma única resposta.
